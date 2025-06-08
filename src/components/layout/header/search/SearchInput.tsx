import { Loader2, X } from 'lucide-react'

import { SearchIcon } from './SearchIcon'

interface Props {
	value: string
	onChange: (value: string) => void
	onClear: () => void
	isLoading: boolean
}

export function SearchInput({ value, onChange, onClear, isLoading }: Props) {
	return (
		<div className="relative">
			<span className="absolute top-1/2 left-4 -translate-y-1/2">
				<SearchIcon />
			</span>
			<input
				type="text"
				placeholder="Search"
				value={value}
				onChange={e => onChange(e.target.value)}
				className="bg-secondary h-12 w-full rounded-[8px] border-none py-3 pr-12 pl-12 text-base leading-6 outline-none placeholder:text-white/20"
			/>
			{value && !isLoading && (
				<button
					onClick={onClear}
					className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
				>
					<X
						size={24}
						className="text-white/50"
					/>
				</button>
			)}
			{isLoading && value.length >= 3 && (
				<span className="absolute top-1/2 right-4 -translate-y-1/2">
					<Loader2
						className="animate-spin"
						size={20}
					/>
				</span>
			)}
		</div>
	)
}
