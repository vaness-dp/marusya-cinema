'use client'

import { useClickOutside } from '@/hooks/ui/useClickOutside'

import { SearchInput } from './SearchInput'
import { SearchModal } from './SearchModal'
import { useSearch } from './useSearch'

export function SearchField() {
	const { searchTerm, setSearchTerm, movies, isVisible, isLoading, handleClose } = useSearch()

	const searchRef = useClickOutside(handleClose)

	return (
		<div
			className="relative"
			ref={searchRef}
		>
			<SearchInput
				value={searchTerm}
				onChange={setSearchTerm}
				onClear={handleClose}
				isLoading={isLoading}
			/>
			{isVisible && movies.length > 0 && (
				<SearchModal
					movies={movies}
					onClose={handleClose}
				/>
			)}
		</div>
	)
}
