import { useEffect, useState } from 'react'

import { useDebounce } from '@/hooks/ui/useDebounce'

import type { IMovieCardResponse } from '@/types/movie.types'

import { movieService } from '@/services/movie.service'

export function useSearch() {
	const [searchTerm, setSearchTerm] = useState('')
	const [movies, setMovies] = useState<IMovieCardResponse[]>([])
	const [isVisible, setIsVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const debouncedSearch = useDebounce(searchTerm, 500)

	const handleClose = () => {
		setIsVisible(false)
		setMovies([])
		setSearchTerm('')
	}

	useEffect(() => {
		async function searchMovies() {
			try {
				setIsLoading(true)
				if (debouncedSearch.length >= 3) {
					const { data } = await movieService.search(debouncedSearch)
					setMovies(data)
					setIsVisible(true)
				} else {
					setMovies([])
					setIsVisible(false)
				}
			} catch (error) {
				console.error('Search error:', error)
				setMovies([])
				setIsVisible(false)
			} finally {
				setIsLoading(false)
			}
		}

		searchMovies()
	}, [debouncedSearch])

	return {
		searchTerm,
		setSearchTerm,
		movies,
		isVisible,
		isLoading,
		handleClose
	}
}
