import cn from 'clsx'
import { Star } from 'lucide-react'

import { formatRuntime } from '@/utils/formatRuntime'

interface Props {
	rating?: number
	year?: number | string
	genres?: string[]
	runtime?: number
	className?: string
}

export function HeroInfo({ rating, year, genres, runtime, className }: Props) {
	return (
		<div className={cn('mb-4 flex items-center gap-4', className || '')}>
			<span className="flex h-8 max-w-17.5 items-center rounded-2xl bg-[#308E21] px-3 py-1 text-base font-bold">
				<Star
					size={16}
					fill="#fff"
					className="mr-1"
				/>
				{rating}
			</span>
			<span className="text-base text-white/70">{year}</span>
			<span className="text-base text-white/70">{genres?.join(', ')}</span>
			<span className="text-base text-white/70">{formatRuntime(runtime)}</span>
		</div>
	)
}
