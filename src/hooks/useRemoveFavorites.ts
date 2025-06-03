import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { IMovieCardResponse } from '@/types/movie.types'

import { movieService } from '@/services/movie.service'

export function useRemoveFavorites() {
	const queryClient = useQueryClient()

	const { mutate: removeFromFavorites } = useMutation({
		mutationKey: ['remove-from-favorites'],
		mutationFn: (movieId: number) => movieService.removeFromFavorites(String(movieId)),
		onMutate: async movieId => {
			// Отменяем исходящие запросы
			await queryClient.cancelQueries({ queryKey: ['favorites'] })

			// Сохраняем предыдущее состояние
			const previousMovies = queryClient.getQueryData<IMovieCardResponse[]>(['favorites'])

			// Оптимистично обновляем UI
			queryClient.setQueryData<IMovieCardResponse[]>(['favorites'], old =>
				old?.filter(movie => movie.id !== movieId)
			)
			return { previousMovies }
		},
		onError: (_, __, context) => {
			// При ошибке возвращаем предыдущее состояние
			queryClient.setQueryData(['favorites'], context?.previousMovies)
		},
		onSettled: () => {
			// В любом случае инвалидируем кэш для получения актуальных данных
			queryClient.invalidateQueries({ queryKey: ['favorites'] })
		}
	})

	return { removeFromFavorites }
}
