import Image from 'next/image'
import Link from 'next/link'

interface Props {
	src: string
	width: number
	height: number
	className?: string
}

export function Logo({ src, width, height, className }: Props) {
	return (
		<Link
			href="/"
			className={className}
		>
			<Image
				src={src}
				alt="logo"
				width={width}
				height={height}
			/>
		</Link>
	)
}
