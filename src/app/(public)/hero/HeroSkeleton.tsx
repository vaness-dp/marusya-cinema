export function HeroSkeleton() {
	return (
		<section className="relative mt-8 flex animate-pulse">
			{/* Левая часть — инфо и текст */}
			<div className="flex max-w-150 flex-1 flex-col justify-center">
				<div className="mb-4 flex items-center gap-4">
					{/* Rating */}
					<span className="h-8 w-16 rounded-2xl bg-white/10"></span>
					{/* Year */}
					<span className="h-5 w-10 rounded bg-white/10"></span>
					{/* Genres */}
					<span className="h-5 w-24 rounded bg-white/10"></span>
					{/* Runtime */}
					<span className="h-5 w-14 rounded bg-white/10"></span>
				</div>

				{/* Title */}
				<div className="mb-4 h-8 w-80 rounded bg-white/20"></div>
				{/* Description */}
				<div className="mb-2 h-6 w-120 rounded bg-white/10"></div>
				<div className="mb-15 h-6 w-96 rounded bg-white/10"></div>

				{/* Actions */}
				<div className="mt-4 flex items-center gap-4">
					<span className="h-14 min-w-42.5 rounded-[28px] bg-white/10"></span>
					<span className="h-14 min-w-42.5 rounded-[28px] bg-white/10"></span>
					<span className="h-14 w-14 rounded-full bg-white/10"></span>
					<span className="h-14 w-14 rounded-full bg-white/10"></span>
				</div>
			</div>

			{/* Правая часть — постер */}
			<div className="relative ml-6 min-h-138 min-w-170 flex-shrink-0 overflow-hidden rounded-2xl bg-white/10" />
		</section>
	)
}
