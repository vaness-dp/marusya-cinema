import { PAGE } from '@/config/page-url.config'

export interface IMenuItem {
	link: string
	label: string
}

export const MENU_DATA: IMenuItem[] = [
	{
		link: PAGE.HOME,
		label: 'Home'
	},
	{
		link: PAGE.GENRES,
		label: 'Genres'
	}
]
