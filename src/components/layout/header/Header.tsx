'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ProfileSkeleton } from '@/components/layout/header/profile/ProfileSkeleton'

import { Logo } from '@/ui/Logo'

import { useProfile } from '@/hooks/useProfile'

import { AuthModal } from '../auth-modal/AuthModal'

import { HeaderProfile } from './profile/HeaderProfile'
import { SearchField } from './search/SearchField'

export function Header() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const { profile, isLoading, isError } = useProfile()

	const isAuth = !isError && !!profile

	return (
		<header className="flex h-24 items-center py-6">
			<div className="mx-auto flex h-12 w-full max-w-320 items-center px-0">
				<Logo
					src="/images/logo.png"
					width={144}
					height={32}
					className="mr-20 min-h-8 min-w-36 flex-shrink-0"
				/>
				<nav className="mr-10">
					<ul className="flex items-center gap-10">
						<li className="text-xl leading-8">
							<Link href="/">Home</Link>
						</li>
						<li className="text-xl leading-8">
							<Link href="/genres">Genres</Link>
						</li>
					</ul>
				</nav>

				<div className="flex min-w-[0] flex-1 items-center">
					<div className="mr-20 flex-1">
						<SearchField />
					</div>
					{isLoading ? (
						<ProfileSkeleton />
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
