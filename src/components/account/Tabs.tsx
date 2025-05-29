import cn from 'clsx'

import type { ITabsData } from './tabs.data'

interface Props {
	tabs: ITabsData[]
	activeTab: string
	onTabChange: (key: string) => void
	className?: string
}

export function Tabs({ tabs, activeTab, onTabChange, className }: Props) {
	return (
		<div className={cn('flex items-center gap-16', className)}>
			{tabs.map(tab => (
				<button
					key={tab.key}
					className={cn(
						'flex items-center gap-2 border-b-[1.5px] pb-2 text-xl leading-6',
						activeTab === tab.key ? 'border-accent' : 'border-transparent'
					)}
					onClick={() => onTabChange(tab.key)}
				>
					<tab.icon size={24} />
					<span>{tab.label}</span>
				</button>
			))}
		</div>
	)
}
