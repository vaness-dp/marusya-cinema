'use client'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { MovieCard } from '@/ui/movie-card/MovieCard'

import { useFavoritesData } from '@/hooks/useFavoritesData'
import { useRemoveFavorites } from '@/hooks/useRemoveFavorites'

export function AccountFavoriteMovies() {
	const { data: response, isLoading } = useFavoritesData()
	const { removeFromFavorites } = useRemoveFavorites()

	if (isLoading) {
		return (
			<div className="grid grid-cols-5 gap-x-10 gap-y-16">
				<SkeletonLoader
					count={10}
					className="h-84 w-56 rounded-2xl"
				/>
			</div>
		)
	}

	const movies = response?.data || []

	if (!movies.length) {
		return (
			<div className="mt-10 text-center text-lg text-white/60">
				У вас пока нет избранных фильмов
			</div>
		)
	}

	return (
		<div className="grid grid-cols-5 gap-x-10 gap-y-16">
			{movies.map(movie => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					posterUrl={movie.posterUrl}
					onRemove={() => removeFromFavorites(movie.id)}
				/>
			))}
		</div>
	)
}
