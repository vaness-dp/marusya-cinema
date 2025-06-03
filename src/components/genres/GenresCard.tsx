import { GenresItem } from './GenresItem'
import { GENRES_DATA } from './genres.data'

export function GenresCard() {
	return (
		<ul className="grid grid-cols-4 gap-x-10 gap-y-16">
			{GENRES_DATA.map(genre => (
				<GenresItem
					key={genre.link}
					item={genre}
				/>
			))}
		</ul>
	)
}
