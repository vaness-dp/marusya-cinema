import { Open_Sans, Play } from 'next/font/google'

import Layout from '@/components/layout/Layout'
import { FavoritesProvider } from '@/components/providers/FavoritesProvider'

import { Providers } from '@/providers/Providers'

import './globals.css'

const play = Play({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-play'
})

const openSans = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-open-sans'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={`${play.variable} ${openSans.variable} antialiased`}>
				<Providers>
					<FavoritesProvider />
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
