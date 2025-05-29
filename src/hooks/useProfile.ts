import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile().then(res => res.data),
		refetchInterval: 1800000, // 30 min
		retry: false,
		enabled: true,
		staleTime: 0
	})

	if (error instanceof AxiosError && error.response?.status === 401) {
		return { profile: null, isLoading: false, isSuccess: false, isError: true, error }
	}

	return { profile: data, isLoading, isSuccess, isError, error }
}
