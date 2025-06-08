import { RefreshCcw } from 'lucide-react'

import { MovieActionButton } from './MovieActionButton'

interface Props {
	isPending: boolean
	onClick: () => void
}

export function RefreshButton({ isPending, onClick }: Props) {
	return (
		<MovieActionButton
			variant="icon"
			onClick={() => !isPending && onClick()}
			disabled={isPending}
		>
			<RefreshCcw size={24} />
		</MovieActionButton>
	)
}
