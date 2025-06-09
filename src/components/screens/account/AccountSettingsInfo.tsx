'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/layout/auth-modal/Button'

import { PAGE } from '@/config/page-url.config'

import { InfoItem } from './InfoItem'
import { authService } from '@/services/auth.service'

interface Props {
	fullName: string
	email: string
	initials: string
}

export function AccountSettingsInfo({ fullName, email, initials }: Props) {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { mutate: logout, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: ['profile'], exact: true })
			router.push(PAGE.HOME)
		}
	})

	return (
		<div className="min-w-120.5">
			<InfoItem
				icon={initials}
				label="Full name"
				value={fullName}
				className="mb-10"
			/>
			<InfoItem
				icon={
					<Mail
						size={24}
						className="text-white"
					/>
				}
				label="Email address"
				value={email}
			/>
			<Button
				onClick={() => logout()}
				className="mt-16 max-w-65.5"
			>
				<span>{isPending ? 'Please wait...' : 'Logout'}</span>
			</Button>
		</div>
	)
}
