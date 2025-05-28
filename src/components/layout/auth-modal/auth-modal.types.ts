export interface IAuthData {
	email: string
	password: string
}

export interface IAuthForm extends IAuthData {
	name: string
	surname: string
	confirmPassword?: string
}
