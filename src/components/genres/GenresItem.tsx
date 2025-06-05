import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { IGenreItem } from '@/components/genres/genres.data'

interface Props {
	item: IGenreItem
}

const FALLBACK_IMAGE = '/images/genres/drama.png'

export function GenresItem({ item }: Props) {
	const [imgSrc, setImgSrc] = useState(item.image)

	return (
		<li className="shadow-card min-h-76 min-w-72.5 rounded-3xl border border-white/25 bg-gray-800">
			<Link
				href={item.link}
				className="flex h-full flex-col items-center"
			>
				<Image
					src={imgSrc}
					alt={item.title}
					width={290}
					height={220}
					className="min-h-55 min-w-72.5 rounded-t-3xl object-cover"
					onError={() => setImgSrc(FALLBACK_IMAGE)}
				/>
				<span className="flex flex-1 items-center py-4 text-xl leading-8 font-bold">
					{item.title}
				</span>
			</Link>
		</li>
	)
}
