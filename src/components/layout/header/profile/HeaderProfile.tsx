import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { PAGE } from '@/config/page-url.config'

import { useProfile } from '@/hooks/user/useProfile'

export function HeaderProfile() {
	const pathname = usePathname()
	const { profile } = useProfile()

	return (
		<Link
			href={PAGE.ACCOUNT}
			className={cn(
				'inline-flex max-h-12 items-center gap-2 px-0 py-2',
				!!match(PAGE.ACCOUNT)(pathname) && 'active-item'
			)}
		>
			<span className="truncate text-xl leading-8">{profile?.name}</span>
		</Link>
	)
}
