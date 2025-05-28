interface Props {
	title?: string
	plot?: string
}

export function HeroDescription({ title, plot }: Props) {
	return (
		<>
			<h1 className="mb-4 text-3xl leading-14 font-extrabold">{title}</h1>
			<p className="mb-15 line-clamp-2 max-w-145 text-xl leading-8 text-white/70">{plot}</p>
		</>
	)
}
