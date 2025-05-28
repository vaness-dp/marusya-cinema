import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import type { SubmitHandler, UseFormReset } from 'react-hook-form'

import type { IAuthData, IAuthForm } from './auth-modal.types'
import { authService } from '@/services/auth.service'

export function useAuthModalForm(
	type: 'auth/login' | 'user',
	reset: UseFormReset<IAuthForm>,
	setSuccess: (value: boolean) => void,
	isLogin: boolean,
	onClose: () => void
) {
	const { mutate, isPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthData) => authService.main(type, data)
	})

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		mutate(data, {
			onSuccess: () => {
				reset()
				if (isLogin) {
					onClose()
				} else {
					setSuccess(true)
				}
			},
			onError: (e: any) => {
				if (axios.isAxiosError(e)) {
					return e.response?.data?.message
				}
			}
		})
	}

	const isLoading = isPending

	return { onSubmit, isLoading, reset }
}
