import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
	favorites: number[]
	setFavorites: (favorites: number[]) => void
}

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		set => ({
			favorites: [],
			setFavorites: (favorites: number[]) => {
				set({ favorites })
			}
		}),
		{
			name: 'favorites-storage'
		}
	)
)
