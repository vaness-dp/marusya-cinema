interface Props {
	title: string
	value: string
}

export function FilmParameter({ title, value }: Props) {
	return (
		<div className="flex items-baseline gap-2">
			<div className="flex w-80 items-baseline gap-2">
				<span>{title}</span>
				<div className="h-px flex-1 border-b border-dashed border-white/50" />
			</div>
			<span>{value}</span>
		</div>
	)
}
