import { Button } from './Button'

export function SuccessBlock({ onLogin }: { onLogin: () => void }) {
	return (
		<div className="flex max-w-105 flex-col items-center">
			<h3 className="mb-6 text-center text-xl leading-8 font-bold text-black">
				Регистрация завершена
			</h3>
			<p className="mb-6 text-center text-base text-black">
				Используйте вашу электронную почту для входа
			</p>
			<Button
				type="button"
				onClick={onLogin}
			>
				Войти
			</Button>
		</div>
	)
}
