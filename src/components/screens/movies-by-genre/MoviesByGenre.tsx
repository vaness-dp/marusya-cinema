'use client'

import { useState } from 'react'

import type { IGenreItem } from '@/components/genres/genres.data'

import { Heading } from '@/ui/Heading'

import { BackButton } from './BackButton'
import { MoviesList } from './MoviesList'

interface Props {
	genre: IGenreItem
	movies: {
		id: number
		title: string
		posterUrl: string
	}[]
}

export function MoviesByGenre({ genre, movies }: Props) {
	const [page, setPage] = useState(1)

	return (
		<section className="mt-16">
			<div className="mb-16 flex min-h-14">
				<BackButton
					currentPage={page}
					onPageChange={setPage}
				/>
				<Heading
					isPageHeading
					className="mb-0"
				>
					{genre.title}
				</Heading>
			</div>
			<MoviesList
				initialMovies={movies}
				genreName={genre.name}
				currentPage={page}
				onPageChange={setPage}
			/>
		</section>
	)
}
