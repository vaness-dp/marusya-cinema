import { axiosClassic } from '@/api/axios'

import type { IMovieResponse } from '@/types/movies.types'

class MovieService {
	async getRandom() {
		return axiosClassic.get<IMovieResponse>('/movie/random')
	}
}

export const movieService = new MovieService()
