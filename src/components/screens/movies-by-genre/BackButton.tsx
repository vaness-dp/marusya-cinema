'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
	currentPage: number
	onPageChange: (page: number) => void
}

export function BackButton({ currentPage, onPageChange }: Props) {
	const router = useRouter()

	const handleBack = () => {
		if (currentPage === 1) {
			router.push('/genres')
		} else {
			onPageChange(currentPage - 1)
		}
	}

	return (
		<button
			onClick={handleBack}
			className="mt-1 mr-4"
		>
			<ChevronLeft
				width={40}
				height={40}
				strokeWidth={2.5}
			/>
		</button>
	)
}
