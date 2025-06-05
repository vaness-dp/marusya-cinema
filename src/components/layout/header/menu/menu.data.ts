import { PAGE } from '@/config/page-url.config'

export interface IMenuItem {
	link: string
	label: string
	pattern?: string
}

export const MENU_DATA: IMenuItem[] = [
	{
		link: PAGE.HOME,
		label: 'Home',
		pattern: `${PAGE.MOVIES}/:id`
	},
	{
		link: PAGE.GENRES,
		label: 'Genres'
	}
]
