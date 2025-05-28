'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Logo } from '@/ui/Logo'

import { AuthModal } from '../auth-modal/AuthModal'

import { SearchField } from './search/SearchField'

export function Header() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpenModal(!isOpenModal)
	}

	return (
		<header className="flex items-center py-6">
			<Logo
				src="/images/logo.png"
				width={144}
				height={32}
				className="mr-20 min-h-8 min-w-36"
			/>
			<nav className="mr-10">
				<ul className="flex items-center">
					<li className="mr-10 text-xl leading-8">
						<Link href="/">Главная</Link>
					</li>
					<li className="text-xl leading-8">
						<Link href="/genres">Жанры</Link>
					</li>
				</ul>
			</nav>
			<SearchField />

			{isOpenModal && <AuthModal onClose={() => setIsOpenModal(false)} />}

			<button
				className="cursor-pointer text-xl leading-8"
				onClick={handleClick}
			>
				Войти
			</button>
		</header>
	)
}
