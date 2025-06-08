import type { IMovieCardResponse } from '@/types/movie.types'

import { SearchItem } from './SearchItem'

interface Props {
	movies: IMovieCardResponse[]
	onClose: () => void
}

export function SearchModal({ movies, onClose }: Props) {
	if (!movies.length) return null

	return (
		<div className="bg-secondary absolute top-full right-0 z-50 mt-2 min-h-[476px] w-[559px] rounded-[8px] shadow-lg">
			<ul className="p-2">
				{movies.map(movie => (
					<SearchItem
						key={movie.id}
						id={movie.id}
						src={movie.posterUrl}
						alt={movie.title}
						rating={movie.tmdbRating}
						year={movie.releaseYear}
						genres={movie.genres}
						runtime={movie.runtime}
						title={movie.title}
						onClose={onClose}
					/>
				))}
			</ul>
		</div>
	)
}
