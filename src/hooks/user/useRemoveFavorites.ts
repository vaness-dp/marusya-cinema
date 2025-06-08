import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useFavoritesStore } from '@/store/favorites.store'

import type { IMovieCardResponse } from '@/types/movie.types'

import { FAVORITES_KEY } from './useFavoritesData'
import { movieService } from '@/services/movie.service'

export function useRemoveFavorites() {
	const queryClient = useQueryClient()
	const { favorites, setFavorites } = useFavoritesStore()

	const { mutate: removeFromFavorites } = useMutation({
		mutationKey: ['remove-from-favorites'],
		mutationFn: (movieId: number) => movieService.removeFromFavorites(String(movieId)),
		onMutate: async movieId => {
			// Отменяем исходящие запросы
			await queryClient.cancelQueries({ queryKey: FAVORITES_KEY })

			// Сохраняем предыдущее состояние
			const previousData = queryClient.getQueryData<{ data: IMovieCardResponse[] }>(FAVORITES_KEY)

			// Оптимистично обновляем UI в React Query
			queryClient.setQueryData<{ data: IMovieCardResponse[] }>(FAVORITES_KEY, old => ({
				...old!,
				data: old?.data.filter(movie => movie.id !== movieId) || []
			}))

			// Оптимистично обновляем Zustand стор
			setFavorites(favorites.filter(id => id !== movieId))

			return { previousData }
		},
		onError: (_, __, context) => {
			// Восстанавливаем состояние в React Query
			queryClient.setQueryData(FAVORITES_KEY, context?.previousData)

			// Восстанавливаем состояние в Zustand сторе
			if (context?.previousData) {
				setFavorites(context.previousData.data.map(movie => movie.id))
			}
		},
		onSettled: () => {
			// В любом случае инвалидируем кэш для получения актуальных данных
			queryClient.invalidateQueries({ queryKey: FAVORITES_KEY })
		}
	})

	return { removeFromFavorites }
}
