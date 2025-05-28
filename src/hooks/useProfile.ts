import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile().then(res => res.data),
		refetchInterval: 1800000, // 30 min
		retry: false
	})
	return { profile: data, isLoading, isSuccess, isError, error }
}
