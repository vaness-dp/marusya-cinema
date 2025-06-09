import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { useGenres } from '@/hooks/movies/useGenres'

import { GenresItem } from './GenresItem'

export function GenresCard() {
	const { data: genres, isLoading } = useGenres()

	if (isLoading) {
		return (
			<div className="grid grid-cols-4 gap-x-10 gap-y-16">
				<SkeletonLoader
					count={8}
					className="h-76 w-72.5 rounded-3xl"
				/>
			</div>
		)
	}

	return (
		<ul className="grid grid-cols-4 gap-x-10 gap-y-16">
			{genres?.map(genre => (
				<GenresItem
					key={genre.link}
					item={genre}
				/>
			))}
		</ul>
	)
}
