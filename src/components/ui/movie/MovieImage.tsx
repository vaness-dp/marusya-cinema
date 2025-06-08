import Image from 'next/image'

import { cn } from '@/utils/cn'

import { ImagePlaceholder } from '../ImagePlaceholder'

interface Props {
	className?: string
	src?: string
	alt?: string
	sizes?: string
}

export function MovieImage({ className, src, alt, sizes }: Props) {
	return (
		<div
			className={cn(
				'relative min-h-138 min-w-170 flex-shrink-0 overflow-hidden rounded-2xl',
				className
			)}
		>
			{src ? (
				<Image
					src={src}
					alt={alt || 'Image'}
					fill
					className="object-cover"
					priority
					sizes={sizes}
				/>
			) : (
				<ImagePlaceholder />
			)}
		</div>
	)
}
