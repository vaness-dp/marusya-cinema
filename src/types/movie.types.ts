export interface IMovieResponse {
	id: number
	title: string
	originalTitle: string
	plot: string
	posterUrl: string
	backdropUrl: string
	trailerUrl: string
	trailerYoutubeId: string
	tmdbRating: number
	releaseYear: number
	releaseDate: string
	runtime: number
	production: string
	director: string
	cast: string[]
	genres: string[]
	keywords: string[]
	language: string
	languages: string[]
	revenue: string
	budget: string
	awardsSummary: string
	countriesOfOrigin: string[]
	searchL: string
	homepage: string
	status: string
}

export interface IMovieRandomResponse {
	id: number
	tmdbRating: number
	releaseYear: number
	genres: string[]
	runtime: number
	title: string
	plot: string
	backdropUrl: string
	isFavorite: boolean
}

export interface IMovieCardResponse {
	id: number
	title: string
	posterUrl: string
}
