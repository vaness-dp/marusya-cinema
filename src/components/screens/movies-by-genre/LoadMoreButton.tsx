'use client'

import { MovieActionButton } from '@/ui/movie/movie-actions/MovieActionButton'

interface Props {
	currentPage: number
	moviesLength: number
	onClick: () => void
}

export function LoadMoreButton({ currentPage, moviesLength, onClick }: Props) {
	// Проверяем, есть ли еще фильмы
	// На первой странице должно быть 15 фильмов
	// На последующих по 10
	const expectedLength = currentPage === 1 ? 15 : 10
	const hasMore = moviesLength === expectedLength

	if (!hasMore) return null

	return (
		<div className="col-span-5 mb-40 flex justify-center">
			<MovieActionButton
				variant="primary"
				onClick={onClick}
			>
				Show more
			</MovieActionButton>
		</div>
	)
}
