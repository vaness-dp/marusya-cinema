import { SkeletonLoader } from '@/ui/SkeletonLoader'

export function MovieSkeleton() {
	return (
		<div className="mt-8 animate-pulse">
			<SkeletonLoader className="mb-6 h-12 w-1/3" />
			<div className="flex gap-8">
				{/* Poster */}
				<SkeletonLoader className="h-[500px] w-[350px] rounded-2xl" />

				{/* Info */}
				<div className="flex-1">
					<div className="mb-8 flex items-center gap-4">
						<SkeletonLoader className="h-8 w-16 rounded-2xl" />
						<SkeletonLoader className="h-6 w-16" />
						<SkeletonLoader className="h-6 w-32" />
						<SkeletonLoader className="h-6 w-20" />
					</div>

					<SkeletonLoader className="mb-4 h-32 w-full" />
					<SkeletonLoader className="mb-8 h-32 w-2/3" />

					<div className="flex gap-4">
						<SkeletonLoader className="h-12 w-32 rounded-full" />
						<SkeletonLoader className="h-12 w-32 rounded-full" />
						<SkeletonLoader className="h-12 w-12 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	)
}
