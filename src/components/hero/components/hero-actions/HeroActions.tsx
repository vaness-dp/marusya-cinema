import { useRandomMovie } from '@/hooks/useRandomMovie'
import { useToggleFavorite } from '@/hooks/useToggleFavorite'

import { FavoriteButton } from './FavoriteButton'
import { HeroActionButton } from './HeroActionButton'
import { RefreshButton } from './RefreshButton'

interface Props {
	movieId: number
	variant?: 'hero' | 'movie'
}

export function HeroActions({ movieId, variant = 'hero' }: Props) {
	const {
		isOptimisticFavorite,
		toggleFavorite,
		isPending: isFavoritePending
	} = useToggleFavorite({
		movieId
	})

	const { refreshMovie, isPending: isRefreshPending } = useRandomMovie()

	return (
		<div className="flex items-center gap-4">
			<HeroActionButton variant="primary">Trailer</HeroActionButton>
			{variant === 'hero' && (
				<>
					<HeroActionButton variant="secondary">About</HeroActionButton>
					<RefreshButton
						isPending={isRefreshPending}
						onClick={refreshMovie}
					/>
				</>
			)}
			<FavoriteButton
				isFavorite={isOptimisticFavorite}
				isPending={isFavoritePending}
				onClick={toggleFavorite}
			/>
		</div>
	)
}
