import { Heading } from '@/ui/Heading'
import { MovieCard } from '@/ui/movie-card/MovieCard'

import { movieService } from '@/services/movie.service'

interface Props {
	searchParams: { genre?: string }
}

export default async function MoviesPage({ searchParams }: Props) {
	const genre = searchParams.genre

	if (!genre) return null

	const movies = await movieService.getByGenre(genre).then(res => res.data)

	return (
		<div className="mt-16 mb-40">
			<Heading isPageHeading>{genre} Movies</Heading>
			<div className="mt-8 grid grid-cols-5 gap-x-10 gap-y-16">
				{movies?.map(movie => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						posterUrl={movie.posterUrl}
					/>
				))}
			</div>
		</div>
	)
}
