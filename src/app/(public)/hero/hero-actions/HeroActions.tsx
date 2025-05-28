import { Heart, RefreshCcw } from 'lucide-react'

import { HeroActionButton } from './HeroActionButton'

export function HeroActions() {
	return (
		<div className="flex items-center gap-4">
			<HeroActionButton variant="primary">Трейлер</HeroActionButton>
			<HeroActionButton variant="secondary">О фильме</HeroActionButton>
			<HeroActionButton variant="icon">
				<Heart size={24} />
			</HeroActionButton>
			<HeroActionButton variant="icon">
				<RefreshCcw size={24} />
			</HeroActionButton>
		</div>
	)
}
