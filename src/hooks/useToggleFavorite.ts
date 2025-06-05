import { useMutation, useQueryClient } from '@tanstack/react-query'

import { FAVORITES_KEY, useFavoritesData } from './useFavoritesData'
import { movieService } from '@/services/movie.service'

interface UseToggleFavoriteProps {
	movieId: number
}

export function useToggleFavorite({ movieId }: UseToggleFavoriteProps) {
	const queryClient = useQueryClient()
	const { data: response } = useFavoritesData()
	const favorites = response?.data || []

	const { mutate: toggleFavorite, isPending } = useMutation({
		mutationFn: () => {
			const isFavorite = favorites.some(movie => movie.id === movieId)
			return isFavorite
				? movieService.removeFromFavorites(String(movieId))
				: movieService.addToFavorites({ movieId })
		},
		onMutate: async () => {
			await queryClient.cancelQueries({ queryKey: FAVORITES_KEY })
			const previousFavorites = queryClient.getQueryData(FAVORITES_KEY)

			queryClient.setQueryData(FAVORITES_KEY, (old: any = { data: [] }) => {
				const exists = old.data.some((m: any) => m.id === movieId)
				return {
					...old,
					data: exists
						? old.data.filter((m: any) => m.id !== movieId)
						: [...old.data, { id: movieId }]
				}
			})

			return { previousFavorites }
		},
		onError: (_, __, context) => {
			queryClient.setQueryData(FAVORITES_KEY, context?.previousFavorites)
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: FAVORITES_KEY })
		}
	})

	return {
		isOptimisticFavorite: favorites.some(movie => movie.id === movieId),
		toggleFavorite,
		isPending
	}
}
