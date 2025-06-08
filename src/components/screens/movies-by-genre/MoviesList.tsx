'use client'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { MovieCard } from '@/ui/movie/movie-card/MovieCard'

import { useMoviesByGenre } from '@/hooks/movies/useMoviesByGenre'

import { LoadMoreButton } from './LoadMoreButton'

interface Props {
	initialMovies: {
		id: number
		title: string
		posterUrl: string
	}[]
	genreName: string
	currentPage: number
	onPageChange: (page: number) => void
}

export function MoviesList({ initialMovies, genreName, currentPage, onPageChange }: Props) {
	const { data: paginatedMovies, isLoading } = useMoviesByGenre(genreName, currentPage)

	const movies = currentPage === 1 ? initialMovies : paginatedMovies || []
	const showButton = currentPage === 1 ? movies.length >= 15 : movies.length >= 10

	return (
		<div className="grid grid-cols-5 gap-x-10 gap-y-16">
			{movies.map(movie => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					posterUrl={movie.posterUrl}
				/>
			))}
			{isLoading && (
				<SkeletonLoader
					count={10}
					className="h-84 w-56 rounded-2xl"
				/>
			)}
			{showButton && (
				<div className="col-span-5 mb-40 flex justify-center">
					<LoadMoreButton
						currentPage={currentPage}
						moviesLength={movies.length}
						onClick={() => onPageChange(currentPage + 1)}
					/>
				</div>
			)}
		</div>
	)
}
