import { axiosClassic } from '@/api/axios'

import type { IMovieCardResponse, IMovieRandomResponse } from '@/types/movie.types'

class MovieService {
	async getRandom() {
		return axiosClassic.get<IMovieRandomResponse>('/movie/random')
	}

	async getTop10() {
		return axiosClassic.get<IMovieCardResponse[]>('/movie/top10')
	}
}

export const movieService = new MovieService()
