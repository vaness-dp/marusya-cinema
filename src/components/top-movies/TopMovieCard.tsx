import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import type { IMovieCardResponse } from '@/types/movie.types'

interface Props {
	movie: IMovieCardResponse
	index: number
}

export function TopMovieCard({ index, movie }: Props) {
	return (
		<Link
			href={`/movies/${movie.id}`}
			className={cn(
				'relative flex flex-col items-center rounded-2xl border border-white/25 bg-gray-800 shadow-[0_0_80px_0_#ffffff54]'
			)}
			style={{
				width: 224,
				height: 336
			}}
		>
			{/* Иконка номера */}
			<div
				className={cn(
					'absolute -top-3 -left-3 z-10 flex h-12 w-15.5 items-center justify-center rounded-full bg-white',
					'shadow'
				)}
			>
				<span className="text-xl font-bold text-[#6a5dc2]">{index + 1}</span>
			</div>
			{movie.posterUrl ? (
				<div className="relative h-full w-full">
					<Image
						src={movie.posterUrl}
						alt={movie.title}
						fill
						className="rounded-2xl object-cover"
						priority={index < 5}
						sizes="224px"
					/>
				</div>
			) : (
				<div className="flex h-full w-full items-center justify-center">No image</div>
			)}
		</Link>
	)
}
