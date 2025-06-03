'use client'

import { useQuery } from '@tanstack/react-query'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { MovieCard } from '../ui/movie-card/MovieCard'

import { movieService } from '@/services/movie.service'

export function AccountFavoriteMovies() {
	const { data: movies = [], isLoading } = useQuery({
		queryKey: ['favorites'],
		queryFn: () => movieService.getFavorites().then(res => res.data)
	})

	return (
		<div className="grid grid-cols-5 gap-x-10 gap-y-16">
			{isLoading ? (
				<SkeletonLoader
					count={10}
					className="h-84 w-56 rounded-2xl"
				/>
			) : (
				movies.map((movie, i) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						posterUrl={movie.posterUrl}
						badgeNumber={i + 1}
					/>
				))
			)}
		</div>
	)
}
