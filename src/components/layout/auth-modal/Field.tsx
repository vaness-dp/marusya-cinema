import cn from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: boolean
	className?: string
	Icon: LucideIcon
	registration: UseFormRegisterReturn
}

export function Field({ placeholder, error, className, Icon, registration, ...props }: Props) {
	return (
		<div
			className={cn(
				'flex min-w-85 items-center rounded-[8px] border border-black/40 bg-transparent p-4',
				error && 'border-error',
				className
			)}
		>
			<Icon
				className={cn('mr-2 text-black/40', error && 'text-error')}
				size={24}
			/>
			<input
				placeholder={placeholder}
				className="flex-1 bg-transparent text-base text-black outline-none placeholder:text-black/40"
				{...registration}
				{...props}
			/>
		</div>
	)
}
