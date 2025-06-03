import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { movieService } from '@/services/movie.service'

interface UseFavoritesProps {
	movieId: number
	initialIsFavorite: boolean
}

export function useFavorites({ movieId, initialIsFavorite }: UseFavoritesProps) {
	const queryClient = useQueryClient()
	const [isOptimisticFavorite, setIsOptimisticFavorite] = useState(initialIsFavorite)

	useEffect(() => {
		setIsOptimisticFavorite(initialIsFavorite)
	}, [initialIsFavorite])

	const { mutate: toggleFavorite, isPending } = useMutation({
		mutationKey: ['toggle-favorite', movieId],
		mutationFn: () =>
			initialIsFavorite
				? movieService.removeFromFavorites(String(movieId))
				: movieService.addToFavorites({ movieId }),
		onMutate: () => {
			const newValue = !initialIsFavorite
			setIsOptimisticFavorite(newValue)

			queryClient.setQueryData(['randomMovie'], (old: any) => ({
				...old,
				isFavorite: newValue
			}))
		},
		onError: () => {
			setIsOptimisticFavorite(initialIsFavorite)
			queryClient.setQueryData(['randomMovie'], (old: any) => ({
				...old,
				isFavorite: initialIsFavorite
			}))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['favorites'] })
		}
	})

	return {
		isOptimisticFavorite,
		toggleFavorite,
		isPending
	}
}
