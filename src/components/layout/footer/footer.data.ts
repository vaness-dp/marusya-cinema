import type { IconType } from 'react-icons'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'

interface Props {
	label: string
	href: string
	Icon: IconType
}

export const SOCIALS: Props[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/vaness-dp',
		Icon: BsGithub
	},
	{
		label: 'Telegram',
		href: 'https://t.me/krylov_dp',
		Icon: BsTelegram
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@van3ss',
		Icon: FaYoutube
	}
]
