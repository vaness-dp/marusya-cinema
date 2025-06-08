import { useQuery } from '@tanstack/react-query'

import { useProfile } from './useProfile'
import { movieService } from '@/services/movie.service'

export const FAVORITES_KEY = ['favorites'] as const

export function useFavoritesData() {
	const { profile } = useProfile()

	return useQuery({
		queryKey: FAVORITES_KEY,
		queryFn: () => movieService.getFavorites(),
		enabled: !!profile, // Запрос будет выполнен только после получения профиля
		staleTime: Infinity // Данные не будут считаться устаревшими, пока не будут явно инвалидированы
	})
}
