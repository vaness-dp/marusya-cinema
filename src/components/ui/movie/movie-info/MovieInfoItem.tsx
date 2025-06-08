import { cn } from '@/utils/cn'

interface MovieInfoItemProps {
	children: React.ReactNode
	className?: string
	isSearch?: boolean
}

export function MovieInfoItem({ children, className, isSearch = false }: MovieInfoItemProps) {
	return (
		<span className={cn('text-base text-white/70', isSearch && 'text-sm', className)}>
			{children}
		</span>
	)
}
