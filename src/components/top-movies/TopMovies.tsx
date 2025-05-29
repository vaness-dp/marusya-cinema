'use client'

import { useQuery } from '@tanstack/react-query'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import type { IMovieCardResponse } from '@/types/movie.types'

import { TopMovieCard } from './TopMovieCard'
import { movieService } from '@/services/movie.service'

export function TopMovies() {
	const { data: movies = [], isLoading } = useQuery<IMovieCardResponse[]>({
		queryKey: ['topMovies'],
		queryFn: () => movieService.getTop10().then(res => res.data)
	})

	return (
		<section className="pt-10 pb-30">
			<h2 className="mb-16 text-2xl leading-12 font-bold">Top 10 movies</h2>
			<div className="grid grid-cols-5 gap-x-16 gap-y-12">
				{isLoading ? (
					<SkeletonLoader
						count={10}
						className="h-84 w-56 rounded-2xl"
					/>
				) : (
					movies.map((movie, i) => (
						<TopMovieCard
							key={movie.id}
							movie={movie}
							index={i}
						/>
					))
				)}
			</div>
		</section>
	)
}
