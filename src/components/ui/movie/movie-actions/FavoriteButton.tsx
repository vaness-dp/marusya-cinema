import cn from 'clsx'
import { Heart } from 'lucide-react'

import { MovieActionButton } from './MovieActionButton'

interface Props {
	isFavorite: boolean
	isPending: boolean
	onClick: () => void
}

export function FavoriteButton({ isFavorite, isPending, onClick }: Props) {
	return (
		<MovieActionButton
			variant="icon"
			onClick={() => !isPending && onClick()}
			disabled={isPending}
		>
			<Heart
				size={24}
				className={cn('transition-colors', {
					'fill-accent-purple-light stroke-accent-purple-light': isFavorite,
					'hover:stroke-accent-purple-light fill-none stroke-white': !isFavorite
				})}
			/>
		</MovieActionButton>
	)
}
