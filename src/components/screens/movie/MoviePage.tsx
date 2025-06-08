'use client'

import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

import { HeroActions } from '@/components/hero/components/hero-actions/HeroActions'

import { MovieDescription } from '@/ui/movie/MovieDescription'
import { MovieImage } from '@/ui/movie/MovieImage'
import { MovieInfo } from '@/ui/movie/movie-info/MovieInfo'

import { AboutMovie } from './AboutMovie'
import { MovieSkeleton } from './MovieSkeleton'
import { movieService } from '@/services/movie.service'

interface Props {
	movieId: string
}

export function MoviePage({ movieId }: Props) {
	const {
		data: movie,
		isLoading,
		error
	} = useQuery({
		queryKey: ['movie', movieId],
		queryFn: () => movieService.getById(movieId).then(res => res.data)
	})

	if (isLoading) return <MovieSkeleton />
	if (error || !movie) return notFound()

	return (
		<section className="relative mt-8 flex flex-col justify-center">
			<div className="flex justify-center">
				<div className="flex max-w-150 flex-1 flex-col justify-center">
					<MovieInfo
						rating={movie.tmdbRating}
						year={movie.releaseYear}
						genres={movie.genres}
						runtime={movie.runtime}
					/>
					<MovieDescription
						title={movie.title}
						plot={movie.plot}
					/>
					<HeroActions
						movieId={movie.id}
						variant="movie"
					/>
				</div>
				<MovieImage
					src={movie.backdropUrl}
					alt={movie.title}
				/>
			</div>
			<AboutMovie
				language={movie.language || 'unknown'}
				budget={movie.budget || 'unknown'}
				revenue={movie.revenue || 'unknown'}
				director={movie.director || 'unknown'}
				production={movie.production || 'unknown'}
				awards={movie.awardsSummary || 'unknown'}
			/>
		</section>
	)
}
