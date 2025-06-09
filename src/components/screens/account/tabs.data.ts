import { Heart, type LucideIcon, User2 } from 'lucide-react'

export interface ITabsData {
	key: string
	label: string
	icon: LucideIcon
}

export const TABS_DATA: ITabsData[] = [
	{
		key: 'favorites',
		label: 'Favorite movies',
		icon: Heart
	},
	{
		key: 'settings',
		label: 'Account settings',
		icon: User2
	}
]
