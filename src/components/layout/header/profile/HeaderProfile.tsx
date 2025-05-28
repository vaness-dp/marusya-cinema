import Link from 'next/link'

import { useProfile } from '@/hooks/useProfile'

export function HeaderProfile() {
	const { profile } = useProfile()

	return (
		<Link
			href="/account"
			className="inline-flex max-h-12 items-center gap-2 border-b-[1.5px] border-[#dC5dfc] px-0 py-2 transition-colors hover:border-[#C255F8]"
		>
			<span className="truncate text-xl leading-8">{profile?.name}</span>
		</Link>
	)
}
