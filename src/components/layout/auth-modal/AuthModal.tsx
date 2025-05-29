'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Logo } from '@/ui/Logo'

import { AuthFormBlock } from './AuthFormBlock'
import { CloseButton } from './CloseButton'
import { SuccessBlock } from './SuccessBlock'
import { SwitchAuth } from './SwitchAuth'
import type { IAuthForm } from './auth-modal.types'
import { useAuthModalForm } from './useAuthModalForm'

export function AuthModal({ onClose }: { onClose: () => void }) {
	const [isLogin, setIsLogin] = useState(true)
	const [success, setSuccess] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const { onSubmit, isLoading } = useAuthModalForm(
		isLogin ? 'auth/login' : 'user',
		reset,
		setSuccess,
		isLogin,
		onClose
	)
	const handleSwitchAuth = (login: boolean) => {
		setIsLogin(login)
		reset()
	}

	const handleSuccessLogin = () => {
		setSuccess(false)
		setIsLogin(true)
		reset()
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="relative flex max-w-105 flex-col items-center justify-center rounded-3xl bg-white px-10 py-16">
				<CloseButton onClick={onClose} />

				<Logo
					src="/images/logo-black.png"
					width={134}
					height={30}
					className="mb-10"
				/>

				{success ? (
					<SuccessBlock onLogin={handleSuccessLogin} />
				) : (
					<>
						<AuthFormBlock
							isLogin={isLogin}
							register={register}
							errors={errors}
							watch={watch}
							onSubmit={handleSubmit(onSubmit)}
							isLoading={isLoading}
						/>
						<SwitchAuth
							isLogin={isLogin}
							setIsLogin={handleSwitchAuth}
						/>
					</>
				)}
			</div>
		</div>
	)
}
