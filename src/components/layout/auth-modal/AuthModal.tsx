'use client'

import cn from 'clsx'
import { Lock, Mail, UserRound } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ButtonSubmit } from './ButtonSubmit'
import { CloseButton } from './CloseButton'
import { Field } from './Field'
import { SwitchAuth } from './SwitchAuth'

export function AuthModal({ onClose }: { onClose: () => void }) {
	const [isLogin, setIsLogin] = useState(true)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="relative flex max-w-105 flex-col items-center rounded-3xl bg-white px-10 py-16">
				<CloseButton onClick={onClose} />

				{/* Logo */}
				<div className="mb-10">
					<Image
						src="/images/auth-logo.png"
						alt="logo"
						width={157}
						height={35}
					/>
				</div>

				<form className="mb-6">
					<>
						<Field
							Icon={Mail}
							type="email"
							registration={register('email', { required: '' })}
							placeholder="Электронная почта"
							className="mb-3"
						/>
						{!isLogin && (
							<>
								<Field
									Icon={UserRound}
									type="text"
									registration={register('name', { required: '' })}
									placeholder="Имя"
									className="mb-3"
								/>
								<Field
									Icon={UserRound}
									type="text"
									registration={register('surname', { required: '' })}
									placeholder="Фамилия"
									className="mb-3"
								/>
							</>
						)}
						<Field
							Icon={Lock}
							type="password"
							registration={register('password', { required: '' })}
							placeholder="Пароль"
							className={cn(isLogin ? 'mb-6' : 'mb-3')}
						/>
						{!isLogin && (
							<Field
								Icon={Lock}
								type="password"
								registration={register('confirmPassword', { required: '' })}
								placeholder="Подвердить пароль"
								className="mb-6"
							/>
						)}
					</>

					<ButtonSubmit>{isLogin ? 'Войти' : 'Создать аккаунт'}</ButtonSubmit>
				</form>

				<SwitchAuth
					isLogin={isLogin}
					setIsLogin={setIsLogin}
				/>
			</div>
		</div>
	)
}
