import { useRouter } from 'next/navigation'

import { MovieDescription } from '@/ui/movie/MovieDescription'
import { MovieImage } from '@/ui/movie/MovieImage'
import { MovieInfo } from '@/ui/movie/movie-info/MovieInfo'

interface Props {
	src: string
	alt: string
	rating: number
	year: number
	genres: string[]
	runtime: number
	title: string
	id: number
	onClose: () => void
}

export function SearchItem({ src, alt, rating, year, genres, runtime, title, id, onClose }: Props) {
	const router = useRouter()

	const handleClick = () => {
		onClose()
		router.push(`/movies/${id}`)
	}

	return (
		<li
			className="flex max-h-23 max-w-135.75 cursor-pointer items-center gap-4 px-2 py-5 transition-colors hover:bg-white/5"
			onClick={handleClick}
		>
			<MovieImage
				src={src}
				alt={alt}
				className="max-h-13 min-h-13 max-w-10 min-w-10 rounded-none"
			/>
			<div>
				<MovieInfo
					rating={rating}
					year={year}
					genres={genres}
					runtime={runtime}
					isSearch
				/>
				<MovieDescription
					title={title}
					isSearch
				/>
			</div>
		</li>
	)
}
