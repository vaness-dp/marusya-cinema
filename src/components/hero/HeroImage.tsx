import Image from 'next/image'

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
					style={{ objectFit: 'cover' }}
					priority
					sizes="(max-width: 768px) 100vw, 680px"
				/>
			) : (
				<div className="flex h-full w-full items-center justify-center bg-gray-800 text-white">
					No image
				</div>
			)}
		</div>
	)
}
