import { axiosClassic } from '@/api/axios'

import type { IProfileResponse } from '@/types/user.types'

class UserService {
	async getProfile() {
		return axiosClassic.get<IProfileResponse>('/profile')
	}
}

export const userService = new UserService()
