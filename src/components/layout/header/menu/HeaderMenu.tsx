import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MenuItem } from './MenuItem'
import { MENU_DATA } from './menu.data'

export function HeaderMenu() {
	const pathname = usePathname()
	return (
		<nav className="mr-10">
			<ul className="flex items-center gap-10">
				{MENU_DATA.map(item => (
					<MenuItem
						key={item.label}
						link={item.link}
						label={item.label}
						isActive={!!match(item.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
