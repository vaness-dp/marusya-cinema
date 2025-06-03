import { axiosClassic } from '@/api/axios'

import type { IMovieCardResponse, IMovieRandomResponse } from '@/types/movie.types'

class MovieService {
	async getRandom() {
		return axiosClassic.get<IMovieRandomResponse>('/movie/random')
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
}

export const movieService = new MovieService()
