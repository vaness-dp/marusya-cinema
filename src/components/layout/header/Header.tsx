'use client'

import { AxiosError } from 'axios'
import { useState } from 'react'

import { Logo } from '@/ui/Logo'
import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { useProfile } from '@/hooks/useProfile'

import { AuthModal } from '../auth-modal/AuthModal'

import { HeaderMenu } from './menu/HeaderMenu'
import { HeaderProfile } from './profile/HeaderProfile'
import { SearchField } from './search/SearchField'

export function Header() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const { profile, isLoading, isError, error } = useProfile()

	// Если получили 401 - пользователь не авторизован
	const isUnauthorized = error instanceof AxiosError && error.response?.status === 401
	const isAuth = !isUnauthorized && !isLoading && !isError && !!profile

	return (
		<header className="flex h-24 items-center py-6">
			<div className="mx-auto flex h-12 w-full max-w-320 items-center px-0">
				<Logo
					src="/images/logo-white.png"
					width={144}
					height={32}
					className="mr-20 min-h-8 min-w-36 flex-shrink-0"
				/>

				<HeaderMenu />

				<div className="flex min-w-[0] flex-1 items-center">
					<div className="mr-20 flex-1">
						<SearchField />
					</div>
					{isLoading && !isUnauthorized ? (
						<SkeletonLoader className="h-8 max-w-32 rounded-full" />
					) : isAuth ? (
						<HeaderProfile />
					) : (
						<button
							className="flex-shrink-0 text-xl leading-8 whitespace-nowrap"
							onClick={() => setIsOpenModal(!isOpenModal)}
						>
							Login
						</button>
					)}
					{isOpenModal && <AuthModal onClose={() => setIsOpenModal(false)} />}
				</div>
			</div>
		</header>
	)
}
