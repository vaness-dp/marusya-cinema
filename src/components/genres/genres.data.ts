export interface IGenreItem {
	name: string
	link: string
	image: string
	title: string
}

export const DISPLAY_GENRES: IGenreItem[] = [
	{
		name: 'drama',
		title: 'Drama',
		image: '/images/genres/drama.png',
		link: '/genres/drama'
	},
	{
		name: 'comedy',
		title: 'Comedy',
		image: '/images/genres/comedy.png',
		link: '/genres/comedy'
	},
	{
		name: 'mystery',
		title: 'Detective',
		image: '/images/genres/detective.png',
		link: '/genres/mystery'
	},
	{
		name: 'family',
		title: 'Family',
		image: '/images/genres/family.png',
		link: '/genres/family'
	},
	{
		name: 'history',
		title: 'History',
		image: '/images/genres/historical.png',
		link: '/genres/history'
	},
	{
		name: 'thriller',
		title: 'Thriller',
		image: '/images/genres/thriller.png',
		link: '/genres/thriller'
	},
	{
		name: 'fantasy',
		title: 'Fantasy',
		image: '/images/genres/fantasy.png',
		link: '/genres/fantasy'
	},
	{
		name: 'adventure',
		title: 'Adventure',
		image: '/images/genres/adventures.png',
		link: '/genres/adventure'
	}
] as const
