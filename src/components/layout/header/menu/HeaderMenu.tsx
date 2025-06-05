import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MenuItem } from './MenuItem'
import { MENU_DATA } from './menu.data'

export function HeaderMenu() {
	const pathname = usePathname()

	const isActive = (item: (typeof MENU_DATA)[0]) => {
		// Проверяем точное совпадение
		if (match(item.link)(pathname)) return true

		// Проверяем паттерн, если он есть
		if (item.pattern && match(item.pattern)(pathname)) return true

		return false
	}

	return (
		<nav className="mr-10">
			<ul className="flex items-center gap-10">
				{MENU_DATA.map(item => (
					<MenuItem
						key={item.label}
						link={item.link}
						label={item.label}
						isActive={isActive(item)}
					/>
				))}
			</ul>
		</nav>
	)
}
