import Link from 'next/link'

import { SOCIALS } from './footer.data'

export function Footer() {
	return (
		<footer className="flex items-center justify-end gap-6 py-10">
			{SOCIALS.map(({ label, href, Icon }) => (
				<Link
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition hover:bg-white/20"
					aria-label={label}
				>
					<Icon
						size={20}
						className="text-white"
					/>
				</Link>
			))}
		</footer>
	)
}
