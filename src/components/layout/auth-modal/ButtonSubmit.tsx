import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function ButtonSubmit({ children }: Props) {
	return (
		<button
			type="submit"
			className="h-14 w-full rounded-[28px] bg-[#67a5eb] text-base leading-6 font-bold"
		>
			{children}
		</button>
	)
}
