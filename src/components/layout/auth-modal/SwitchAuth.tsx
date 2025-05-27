import type { Dispatch, SetStateAction } from 'react'

interface Props {
	isLogin: boolean
	setIsLogin: Dispatch<SetStateAction<boolean>>
}

export function SwitchAuth({ isLogin, setIsLogin }: Props) {
	return (
		<>
			{isLogin && (
				<button
					type="button"
					className="text-base leading-6 font-bold text-black"
					onClick={() => setIsLogin(false)}
				>
					Регистрация
				</button>
			)}

			{!isLogin && (
				<button
					type="button"
					className="text-base leading-6 font-bold text-black"
					onClick={() => setIsLogin(true)}
				>
					У меня есть пароль
				</button>
			)}
		</>
	)
}
