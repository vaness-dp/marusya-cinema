import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { Heart, RefreshCcw } from 'lucide-react'
import { useEffect, useState } from 'react'

import { HeroActionButton } from './HeroActionButton'
import { movieService } from '@/services/movie.service'

export function HeroActions({ movieId, isFavorite }: { movieId: number; isFavorite: boolean }) {
	const queryClient = useQueryClient()
	const [isOptimisticFavorite, setIsOptimisticFavorite] = useState(isFavorite)

	// Синхронизируем локальное состояние при изменении isFavorite из пропсов
	useEffect(() => {
		setIsOptimisticFavorite(isFavorite)
	}, [isFavorite])

	const { mutate: toggleFavorite, isPending } = useMutation({
		mutationKey: ['toggle-favorite', movieId],
		mutationFn: () =>
			isFavorite
				? movieService.removeFromFavorites(String(movieId))
				: movieService.addToFavorites({ movieId }),
		onMutate: () => {
			const newValue = !isFavorite
			setIsOptimisticFavorite(newValue)

			queryClient.setQueryData(['randomMovie'], (old: any) => ({
				...old,
				isFavorite: newValue
			}))
		},
		onError: () => {
			setIsOptimisticFavorite(isFavorite)
			queryClient.setQueryData(['randomMovie'], (old: any) => ({
				...old,
				isFavorite: isFavorite
			}))
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['favorites'] })
		}
	})

	const { mutate: refreshMovie } = useMutation({
		mutationKey: ['refresh-movie'],
		mutationFn: () => movieService.getRandom(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['randomMovie'] })
		}
	})

	return (
		<div className="flex items-center gap-4">
			<HeroActionButton variant="primary">Trailer</HeroActionButton>
			<HeroActionButton variant="secondary">About</HeroActionButton>
			<HeroActionButton
				variant="icon"
				onClick={() => !isPending && toggleFavorite()}
				disabled={isPending}
			>
				<Heart
					size={24}
					className={cn('transition-colors', {
						'fill-accent-purple-light stroke-accent-purple-light': isOptimisticFavorite,
						'hover:stroke-accent-purple-light fill-none stroke-white': !isOptimisticFavorite
					})}
				/>
			</HeroActionButton>
			<HeroActionButton
				variant="icon"
				onClick={() => refreshMovie()}
			>
				<RefreshCcw size={24} />
			</HeroActionButton>
		</div>
	)
}
