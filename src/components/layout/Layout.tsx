import type { PropsWithChildren } from 'react'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="mx-auto flex min-h-screen max-w-360 flex-col px-20">
			<Header />
			<main className="flex flex-1 flex-col items-center justify-center">{children}</main>
			<Footer />
		</div>
	)
}
