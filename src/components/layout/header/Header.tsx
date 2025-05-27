'use client'

import Link from 'next/link'
import { useState } from 'react'

import { AuthModal } from '../auth-modal/AuthModal'

import { Logo } from './Logo'
import { SearchField } from './search/SearchField'

export function Header() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpenModal(!isOpenModal)
	}

	return (
		<header className="flex items-center py-6">
			<Logo className="mr-20" />
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
