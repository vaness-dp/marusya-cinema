'use client'

import { useState } from 'react'

import { Heading } from '@/ui/Heading'

import { useProfile } from '@/hooks/useProfile'

import { getInitials } from '@/utils/getInitials'

import { AccountFavoriteMovies } from './AccountFavoriteMovies'
import { AccountSettingsInfo } from './AccountSettingsInfo'
import { Tabs } from './Tabs'
import { TABS_DATA } from './tabs.data'

export function Account() {
	const { profile, isLoading } = useProfile()
	const [activeTab, setActiveTab] = useState('favorites')
	const fullName = [profile?.name, profile?.surname].filter(Boolean).join(' ')

	return (
		<section className="mt-16">
			<Heading isPageHeading>My account</Heading>
			<Tabs
				tabs={TABS_DATA}
				activeTab={activeTab}
				onTabChange={setActiveTab}
			/>
			<div className="mt-16">
				{activeTab === 'favorites' && <AccountFavoriteMovies />}
				{activeTab === 'settings' && (
					<AccountSettingsInfo
						initials={getInitials(fullName)}
						fullName={fullName}
						email={profile?.email || ''}
					/>
				)}
			</div>
		</section>
	)
}
