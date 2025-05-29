import Image from 'next/image'

import { ImagePlaceholder } from '@/ui/ImagePlaceholder'

interface Props {
	src?: string
	alt?: string
}

export function HeroImage({ src, alt }: Props) {
	return (
		<div className="relative min-h-138 min-w-170 flex-shrink-0 overflow-hidden rounded-2xl">
			{src ? (
				<Image
					src={src}
					alt={alt || 'Image'}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 768px) 100vw, 680px"
				/>
			) : (
				<ImagePlaceholder />
			)}
		</div>
	)
}
