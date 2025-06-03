import { useFavorites } from '@/hooks/useFavorites'
import { useRandomMovie } from '@/hooks/useRandomMovie'

import { FavoriteButton } from './FavoriteButton'
import { HeroActionButton } from './HeroActionButton'
import { RefreshButton } from './RefreshButton'

interface Props {
	movieId: number
	isFavorite: boolean
}

export function HeroActions({ movieId, isFavorite }: Props) {
	const {
		isOptimisticFavorite,
		toggleFavorite,
		isPending: isFavoritePending
	} = useFavorites({
		movieId,
		initialIsFavorite: isFavorite
	})

	const { refreshMovie, isPending: isRefreshPending } = useRandomMovie()

	return (
		<div className="flex items-center gap-4">
			<HeroActionButton variant="primary">Trailer</HeroActionButton>
			<HeroActionButton variant="secondary">About</HeroActionButton>
			<FavoriteButton
				isFavorite={isOptimisticFavorite}
				isPending={isFavoritePending}
				onClick={toggleFavorite}
			/>
			<RefreshButton
				isPending={isRefreshPending}
				onClick={refreshMovie}
			/>
		</div>
	)
}
