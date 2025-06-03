import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: ReactNode
	isH1?: boolean
	isPageHeading?: boolean
	className?: string
}

export function Heading({ children, isPageHeading = false, isH1 = false, className }: Props) {
	return (
		<>
			{isH1 || isPageHeading ? (
				<h1
					className={twMerge(
						'mb-4 text-3xl leading-14 font-bold',
						isPageHeading && 'mb-16 text-3xl leading-14 font-bold',
						className
					)}
				>
					{children}
				</h1>
			) : (
				<h2 className={twMerge('mb-16 text-2xl leading-12 font-bold', className)}>{children}</h2>
			)}
		</>
	)
}
