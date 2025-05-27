import { X } from 'lucide-react'

export function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			className="absolute top-0 -right-18 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white"
			aria-label="Закрыть"
			onClick={onClick}
		>
			<X
				size={24}
				className="text-black"
			/>
		</button>
	)
}
