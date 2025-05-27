import { SearchIcon } from './SearchIcon'

export function SearchField() {
	return (
		<div className="relative mr-20">
			<span className="absolute top-1/2 left-4 -translate-y-1/2">
				<SearchIcon />
			</span>
			<input
				type="search"
				placeholder="Поиск"
				className="bg-secondary h-12 min-w-164 rounded-[8px] border-none py-3 pr-4 pl-12 text-base leading-6 outline-none placeholder:text-white/20"
			/>
		</div>
	)
}
