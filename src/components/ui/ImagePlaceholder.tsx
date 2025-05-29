import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children?: ReactNode
	className?: string
}

export function ImagePlaceholder({ children, className }: Props) {
	return (
		<div
			className={cn(
				'flex h-full w-full items-center justify-center rounded-2xl bg-gray-800',
				className
			)}
		>
			{children || 'No image'}
		</div>
	)
}
