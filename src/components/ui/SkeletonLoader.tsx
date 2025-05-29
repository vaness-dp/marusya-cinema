import type { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	count?: number
	className?: string
	style?: CSSProperties
}

export function SkeletonLoader({ count = 1, className = '', style }: Props) {
	return (
		<>
			{Array.from({ length: count }).map((_, i) => (
				<div
					key={i}
					className={twMerge('mb-2.5 h-10 w-full animate-pulse rounded bg-white/10', className)}
					style={style}
				/>
			))}
		</>
	)
}
