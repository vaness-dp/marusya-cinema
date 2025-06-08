export interface IMovieResponse extends IMovieCardResponse {
	description: string
	director: string
	actors: string[]
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
