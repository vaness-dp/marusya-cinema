import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'
import { formatRuntime } from '@/utils/formatRuntime'

import { MovieInfoItem } from './MovieInfoItem'
import { getMovieInfoItems } from './movie-info.data'
import type { IMovie } from './movie-info.types'

interface Props {
	year?: number
	genres?: string[]
	runtime?: number
	rating?: number
	className?: string
	isSearch?: boolean
}

export function MovieInfo({
	year = 0,
	genres,
	runtime = 0,
	rating = 0,
	className,
	isSearch = false
}: Props) {
	const movie: IMovie = {
		year,
		genres: genres?.slice(0, 1),
		runtime
	}
	const items = getMovieInfoItems(movie)
	const formattedRating = rating.toFixed(1)

	return (
		<div className={cn('mb-4 flex items-center gap-4', isSearch && 'mb-2 gap-3', className)}>
			<span
				className={cn(
					'bg-green flex h-8 max-w-17.5 items-center rounded-2xl px-3 py-1 text-base font-bold',
					isSearch && 'h-5 max-w-11.75 px-2 py-0.5 text-xs'
				)}
			>
				<Star
					size={isSearch ? 10 : 16}
					fill="#fff"
					className="mr-1"
				/>
				{formattedRating}
			</span>
			{items.map((item, index) => (
				<MovieInfoItem
					key={index}
					isSearch={isSearch}
				>
					{index === 2 ? formatRuntime(item.content as number) : item.content}
				</MovieInfoItem>
			))}
		</div>
	)
}
