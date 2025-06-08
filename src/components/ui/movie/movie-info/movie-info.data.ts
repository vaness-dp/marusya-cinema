import type { IMovie } from '@/ui/movie/movie-info/movie-info.types'

export const getMovieInfoItems = (movie: IMovie) => [
	{ content: movie.year },
	{ content: movie.genres?.join(', ') },
	{ content: movie.runtime }
]
