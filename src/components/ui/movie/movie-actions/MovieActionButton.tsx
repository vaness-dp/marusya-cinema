import cn from 'clsx'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'icon'
	onClick?: () => void
	disabled?: boolean
	className?: string
}

export function MovieActionButton({
	children,
	variant = 'primary',
	onClick,
	disabled,
	className
}: Props) {
	return (
		<button
			type="button"
			className={cn(
				'flex items-center justify-center text-base font-bold',
				{
					'h-14 rounded-[28px] bg-[#67A5EB] px-12 py-4': variant === 'primary',
					'h-14 rounded-[28px] border border-black/40 bg-[#393B3C] px-12 py-4':
						variant === 'secondary',
					'h-14 w-17 rounded-full border border-black/40 bg-[#393B3C]': variant === 'icon'
				},
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
