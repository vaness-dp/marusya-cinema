'use client'

import { useQuery } from '@tanstack/react-query'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'

import type { IMovieCardResponse } from '@/types/movie.types'

import { MovieCard } from '../ui/movie-card/MovieCard'

import { movieService } from '@/services/movie.service'

export function TopMovies() {
	const { data: movies = [], isLoading } = useQuery<IMovieCardResponse[]>({
		queryKey: ['topMovies'],
		queryFn: () => movieService.getTop10().then(res => res.data)
	})

	return (
		<section className="pt-10 pb-30">
			<Heading>Top 10 movies</Heading>
			<div className="grid grid-cols-5 gap-x-16 gap-y-12">
				{isLoading ? (
					<SkeletonLoader
						count={10}
						className="h-84 w-56 rounded-2xl"
					/>
				) : (
					movies.map((movie, i) => (
						<MovieCard
							id={movie.id}
							key={movie.id}
							title={movie.title}
							posterUrl={movie.posterUrl}
							badgeNumber={i + 1}
						/>
					))
				)}
			</div>
		</section>
	)
}
