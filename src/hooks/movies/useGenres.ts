import { useQuery } from '@tanstack/react-query'

import { DISPLAY_GENRES } from '@/components/screens/genres/genres.data'

import { movieService } from '@/services/movie.service'

export function useGenres() {
	return useQuery({
		queryKey: ['genres'],
		queryFn: () => movieService.getGenres().then(res => res.data),
		select: () => DISPLAY_GENRES
	})
}
