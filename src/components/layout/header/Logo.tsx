import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function Logo({ className = '' }) {
	return (
		<Link
			href="/"
			className={cn('min-h-8 min-w-36', className)}
		>
			<Image
				src="/images/logo.png"
				alt="logo"
				width={144}
				height={32}
			/>
		</Link>
	)
}
