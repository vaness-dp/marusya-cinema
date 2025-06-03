import Image from 'next/image'
import Link from 'next/link'

import { type IGenreItem } from './genres.data'

interface Props {
	item: IGenreItem
}

export function GenresItem({ item }: Props) {
	return (
		<li className="shadow-card min-h-76 min-w-72.5 rounded-3xl border border-white/25 bg-gray-800">
			<Link
				href={item.link}
				className="flex h-full flex-col items-center"
			>
				<Image
					src={item.image}
					alt={item.title}
					width={290}
					height={220}
					className="min-h-55 min-w-72.5 rounded-t-3xl object-cover"
				/>
				<span className="flex flex-1 items-center py-4 text-xl leading-8 font-bold">
					{item.title}
				</span>
			</Link>
		</li>
	)
}
