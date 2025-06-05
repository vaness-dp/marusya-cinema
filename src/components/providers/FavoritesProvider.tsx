'use client'

import { useEffect } from 'react'

import { useFavoritesStore } from '@/store/favorites.store'

import { useFavoritesData } from '@/hooks/useFavoritesData'

import type { IMovieCardResponse } from '@/types/movie.types'

export function FavoritesProvider() {
	const { data: response } = useFavoritesData()
	const { setFavorites } = useFavoritesStore()

	useEffect(() => {
		if (response?.data) {
			setFavorites(response.data.map((movie: IMovieCardResponse) => movie.id))
		}
	}, [response?.data, setFavorites])

	return null
}
