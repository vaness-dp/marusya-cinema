import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DISPLAY_GENRES } from '@/components/screens/genres/genres.data'
import { MoviesByGenre } from '@/components/screens/movies-by-genre/MoviesByGenre'

import { movieService } from '@/services/movie.service'

interface Props {
	params: { name: string }
}

export function generateMetadata({ params }: Props): Metadata {
	const genre = DISPLAY_GENRES.find(g => g.name === params.name)
	if (!genre) return { title: 'Genre not found' }

	return {
		title: `${genre.title} - Marusya Cinema`
	}
}

export function generateStaticParams() {
	return DISPLAY_GENRES.map(genre => ({
		name: genre.name
	}))
}

export default async function GenrePage({ params }: Props) {
	const genre = DISPLAY_GENRES.find(g => g.name === params.name)
	if (!genre) return notFound()

	const movies = await movieService.getByGenre(params.name).then(res => res.data)

	return (
		<MoviesByGenre
			genre={genre}
			movies={movies}
		/>
	)
}
