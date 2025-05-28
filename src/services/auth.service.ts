import type { IAuthData } from '@/components/layout/auth-modal/auth-modal.types'

import { axiosClassic } from '@/api/axios'

class AuthService {
	async main(type: 'auth/login' | 'user', data: IAuthData) {
		const response = await axiosClassic.post<IAuthData>(`/${type}`, data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		return response
	}
}

export const authService = new AuthService()
