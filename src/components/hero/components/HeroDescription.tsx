import { Heading } from '@/ui/Heading'

interface Props {
	title?: string
	plot?: string
}

export function HeroDescription({ title, plot }: Props) {
	return (
		<>
			<Heading isH1>{title}</Heading>
			<p className="mb-15 line-clamp-2 max-w-145 text-xl leading-8 text-white/70">{plot}</p>
		</>
	)
}
