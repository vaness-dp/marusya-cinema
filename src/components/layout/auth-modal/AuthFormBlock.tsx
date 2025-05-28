import cn from 'clsx'
import { Lock, Mail, UserRound } from 'lucide-react'
import type { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import { Button } from './Button'
import { Field } from './Field'
import type { IAuthForm } from './auth-modal.types'

interface Props {
	isLogin: boolean
	register: UseFormRegister<IAuthForm>
	errors: FieldErrors<IAuthForm>
	watch: UseFormWatch<IAuthForm>
	onSubmit: (data: any) => void
	isLoading: boolean
}

export function AuthFormBlock({ isLogin, register, errors, onSubmit, isLoading, watch }: Props) {
	return (
		<form
			onSubmit={onSubmit}
			className="mb-6"
		>
			<>
				<Field
					Icon={Mail}
					type="email"
					registration={register('email', { required: true })}
					placeholder="Электронная почта"
					className="mb-3"
					error={!!errors.email}
				/>

				{!isLogin && (
					<>
						<Field
							Icon={UserRound}
							type="text"
							registration={register('name', { required: true })}
							placeholder="Имя"
							className="mb-3"
							error={!!errors.name}
						/>
						<Field
							Icon={UserRound}
							type="text"
							registration={register('surname', { required: true })}
							placeholder="Фамилия"
							className="mb-3"
							error={!!errors.surname}
						/>
					</>
				)}
				<Field
					Icon={Lock}
					type="password"
					registration={register('password', { required: true })}
					placeholder="Пароль"
					className={cn(isLogin ? 'mb-6' : 'mb-3')}
					error={!!errors.password}
				/>

				{!isLogin && (
					<Field
						Icon={Lock}
						type="password"
						registration={register('confirmPassword', {
							required: true,
							validate: value => value === watch('password')
						})}
						placeholder="Подвердить пароль"
						className="mb-6"
						error={!!errors.confirmPassword}
					/>
				)}
			</>

			<Button
				type="submit"
				isLoading={isLoading}
			>
				{isLogin ? 'Войти' : 'Создать аккаунт'}
			</Button>
		</form>
	)
}
