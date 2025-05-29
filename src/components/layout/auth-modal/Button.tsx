import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	className?: string
	children: ReactNode
}

export function Button({ isLoading, className, children, ...props }: Props) {
	return (
		<button
			className={twMerge(
				'h-14 w-full rounded-[28px] bg-[#67a5eb] text-base leading-6 font-bold',
				className
			)}
			disabled={isLoading || props.disabled}
			{...props}
		>
			{children}
		</button>
	)
}
