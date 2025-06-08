'use client'

import { useQuery } from '@tanstack/react-query'

import { MovieDescription } from '@/ui/movie/MovieDescription'
import { MovieImage } from '@/ui/movie/MovieImage'
import { MovieInfo } from '@/ui/movie/movie-info/MovieInfo'

import { HeroSkeleton } from './components/HeroSkeleton'
import { HeroActions } from './components/hero-actions/HeroActions'
import { movieService } from '@/services/movie.service'

export function Hero() {
	const { data, isLoading } = useQuery({
		queryKey: ['randomMovie'],
		queryFn: () => movieService.getRandom().then(res => res.data)
	})

	if (isLoading) return <HeroSkeleton />

	return (
		<section className="relative mt-8 flex">
			<div className="flex max-w-150 flex-1 flex-col justify-center">
				<MovieInfo
					rating={data?.tmdbRating}
					year={data?.releaseYear}
					genres={data?.genres}
					runtime={data?.runtime}
				/>
				<MovieDescription
					title={data?.title}
					plot={data?.plot}
				/>
				<HeroActions movieId={data?.id || 0} />
			</div>
			<MovieImage
				src={data?.backdropUrl}
				alt={data?.title}
				sizes="(max-width: 768px) 100vw, 680px"
			/>
		</section>
	)
}
