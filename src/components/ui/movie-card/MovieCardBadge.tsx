import cn from 'clsx'

interface Props {
	number: number
	className?: string
}

export function MovieCardBadge({ number, className }: Props) {
	return (
		<div
			className={cn(
				'absolute -top-3 -left-3 z-10 flex h-12 w-15.5 items-center justify-center rounded-full bg-white shadow',
				className
			)}
		>
			<span className="text-accent-purple-dark text-xl font-bold">{number}</span>
		</div>
	)
}
