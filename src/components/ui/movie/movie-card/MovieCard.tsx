'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { ImagePlaceholder } from '@/ui/ImagePlaceholder'

import { MovieCardBadge } from './MovieCardBadge'
import { MovieCardButton } from './MovieCardButton'

interface Props {
	id: number | string
	title: string
	posterUrl?: string
	badgeNumber?: number
	href?: string
	children?: React.ReactNode
	className?: string
	onRemove?: () => void
}

export function MovieCard({
	id,
	title,
	posterUrl,
	badgeNumber,
	href = `/movies/${id}`,
	children,
	className,
	onRemove
}: Props) {
	return (
		<Link
			href={href}
			className={cn(
				'group shadow-card relative flex flex-col items-center rounded-2xl border border-white/25 bg-gray-800',
				className
			)}
			style={{
				width: 224,
				height: 336
			}}
		>
			{badgeNumber !== undefined && <MovieCardBadge number={badgeNumber} />}
			{onRemove && <MovieCardButton onClick={onRemove} />}

			{posterUrl ? (
				<div className="relative h-full w-full">
					<Image
						src={posterUrl}
						alt={title}
						fill
						className="rounded-2xl object-cover"
						priority={badgeNumber !== undefined && badgeNumber < 5}
						sizes="224px"
					/>
				</div>
			) : (
				<ImagePlaceholder />
			)}
			{children}
		</Link>
	)
}
