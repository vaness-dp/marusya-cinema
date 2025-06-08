export interface IMovieResponse extends IMovieCardResponse {
	description: string
	director: string
	actors: string[]
	plot: string
	backdropUrl: string
	language: string
	budget: string
	revenue: string
	production: string
	awardsSummary: string
}

export interface IMovieRandomResponse {
	id: number
}

export interface IMovieCardResponse {
	id: number
	title: string
	posterUrl: string
	tmdbRating: number
	releaseYear: number
	genres: string[]
	runtime: number
}
