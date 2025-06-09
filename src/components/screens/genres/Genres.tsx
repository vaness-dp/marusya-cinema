'use client'

import { Heading } from '@/ui/Heading'

import { GenresCard } from './GenresCard'

export function Genres() {
	return (
		<div className="mt-16 mb-40">
			<Heading isPageHeading>Movie genres</Heading>
			<GenresCard />
		</div>
	)
}
