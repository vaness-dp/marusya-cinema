import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ isLoading, children, ...props }: Props) {
	return (
		<button
			className="h-14 w-full rounded-[28px] bg-[#67a5eb] text-base leading-6 font-bold"
			disabled={isLoading || props.disabled}
			{...props}
		>
			{children}
		</button>
	)
}
