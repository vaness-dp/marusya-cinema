import { X } from 'lucide-react'

interface Props {
	onClick?: () => void
}

export function MovieCardButton({ onClick }: Props) {
	return (
		<button
			onClick={e => {
				e.preventDefault()
				onClick?.()
			}}
			className="absolute -top-5 -right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
		>
			<X
				size={24}
				className="text-black"
			/>
		</button>
	)
}
