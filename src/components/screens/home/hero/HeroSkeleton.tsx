import { SkeletonLoader } from '@/ui/SkeletonLoader'

export function HeroSkeleton() {
	return (
		<section className="relative mt-8 flex animate-pulse">
			{/* Left — info and text */}
			<div className="flex max-w-150 flex-1 flex-col justify-center">
				<div className="mb-4 flex items-center gap-4">
					{/* Rating */}
					<SkeletonLoader className="h-8 w-16 rounded-2xl" />
					{/* Year */}
					<SkeletonLoader className="h-5 w-10" />
					{/* Genres */}
					<SkeletonLoader className="h-5 w-24" />
					{/* Runtime */}
					<SkeletonLoader className="h-5 w-14" />
				</div>

				{/* Title */}
				<SkeletonLoader className="mb-4 h-8 w-80" />
				{/* Description */}
				<SkeletonLoader className="mb-2 h-6 w-120" />
				<SkeletonLoader className="mb-15 h-6 w-96" />

				{/* Actions */}
				<div className="mt-4 flex items-center gap-4">
					<SkeletonLoader className="h-14 w-32 rounded-[28px]" />
					<SkeletonLoader className="h-14 w-32 rounded-[28px]" />
					<SkeletonLoader className="h-14 w-14 rounded-full" />
					<SkeletonLoader className="h-14 w-14 rounded-full" />
				</div>
			</div>

			{/* Right - Poster */}
			<SkeletonLoader className="relative ml-6 h-138 w-170 flex-shrink-0 overflow-hidden rounded-2xl" />
		</section>
	)
}
