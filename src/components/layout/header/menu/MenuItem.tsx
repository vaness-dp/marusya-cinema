import cn from 'clsx'
import Link from 'next/link'

import type { IMenuItem } from './menu.data'

interface Props extends IMenuItem {
	isActive?: boolean
}

export function MenuItem({ link, label, isActive }: Props) {
	return (
		<li className={cn('text-xl leading-8', isActive && 'active-item')}>
			<Link href={link}>{label}</Link>
		</li>
	)
}
