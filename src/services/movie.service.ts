import { axiosClassic } from '@/api/axios'

import type { IMovieCardResponse, IMovieRandomResponse, IMovieResponse } from '@/types/movie.types'

class MovieService {
	async getRandom() {
		return axiosClassic.get<IMovieRandomResponse>('/movie/random')
	}

	async getByGenre(genre: string, page = 1) {
		return axiosClassic.get<IMovieCardResponse[]>('/movie', {
			params: {
				genre,
				page,
				count: page === 1 ? 15 : 10 // 15 фильмов на первой странице, +10 при подгрузке
			}
		})
	}

	async getTop10() {
		return axiosClassic.get<IMovieCardResponse[]>('/movie/top10')
	}

	async getFavorites() {
		return axiosClassic.get<IMovieCardResponse[]>('/favorites')
	}

	async addToFavorites({ movieId }: { movieId: number }) {
		const formData = new URLSearchParams()
		formData.append('id', String(movieId))

		return axiosClassic.post('/favorites', formData, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	}

	async removeFromFavorites(movieId: string) {
		return axiosClassic.delete(`/favorites/${movieId}`)
	}

	async getGenres() {
		return axiosClassic.get<string[]>('/movie/genres')
	}

	async getById(id: string) {
		return axiosClassic.get<IMovieResponse>(`/movie/${id}`)
	}
}

export const movieService = new MovieService()
