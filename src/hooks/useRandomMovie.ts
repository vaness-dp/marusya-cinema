import { useMutation, useQueryClient } from '@tanstack/react-query'

import { movieService } from '@/services/movie.service'

export function useRandomMovie() {
	const queryClient = useQueryClient()

	const { mutate: refreshMovie, isPending } = useMutation({
		mutationKey: ['refresh-movie'],
		mutationFn: () => movieService.getRandom(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['randomMovie'] })
		}
	})

	return {
		refreshMovie,
		isPending
	}
}
