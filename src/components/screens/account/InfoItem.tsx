import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	icon?: ReactNode
	label: string
	value: string
	className?: string
}

export function InfoItem({ icon, label, value, className }: Props) {
	return (
		<div className={cn('flex items-center gap-4', className)}>
			<div className="flex h-15 w-15 items-center justify-center rounded-full bg-white/50 text-xl leading-8 font-bold">
				{icon}
			</div>
			<div>
				<span className="block text-base leading-6">{label}</span>
				<span className="block text-xl leading-8 font-bold">{value}</span>
			</div>
		</div>
	)
}
