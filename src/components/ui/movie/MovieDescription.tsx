import { Heading } from '@/ui/Heading'

interface Props {
	title?: string
	plot?: string
	isSearch?: boolean
}

export function MovieDescription({ title, plot, isSearch = false }: Props) {
	return (
		<>
			<Heading
				isH1
				isSearch={isSearch}
			>
				{title}
			</Heading>
			{!isSearch && (
				<p className="mb-15 line-clamp-2 max-w-145 text-xl leading-8 text-white/70">{plot}</p>
			)}
		</>
	)
}
