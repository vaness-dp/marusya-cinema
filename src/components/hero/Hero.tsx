'use client'

import { useQuery } from '@tanstack/react-query'

import { HeroDescription } from './components/HeroDescription'
import { HeroImage } from './components/HeroImage'
import { HeroInfo } from './components/HeroInfo'
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
				<HeroInfo
					rating={data?.tmdbRating}
					year={data?.releaseYear}
					genres={data?.genres}
					runtime={data?.runtime}
				/>
				<HeroDescription
					title={data?.title}
					plot={data?.plot}
				/>
				<HeroActions movieId={data?.id || 0} />
			</div>
			<HeroImage
				src={data?.backdropUrl}
				alt={data?.title}
			/>
		</section>
	)
}
