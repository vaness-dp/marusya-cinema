import { useQuery } from '@tanstack/react-query'

import { movieService } from '@/services/movie.service'

export function useMoviesByGenre(genre: string, page = 1) {
	return useQuery({
		queryKey: ['movies by genre', genre, page],
		queryFn: () =>
			movieService.getByGenre(genre, page).then(res => {
				return res.data
			})
	})
}
