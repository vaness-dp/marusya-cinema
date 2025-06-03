import { RefreshCcw } from 'lucide-react'

import { HeroActionButton } from './HeroActionButton'

interface Props {
	isPending: boolean
	onClick: () => void
}

export function RefreshButton({ isPending, onClick }: Props) {
	return (
		<HeroActionButton
			variant="icon"
			onClick={() => !isPending && onClick()}
			disabled={isPending}
		>
			<RefreshCcw size={24} />
		</HeroActionButton>
	)
}
