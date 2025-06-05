'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
						refetchOnWindowFocus: false,
						refetchOnMount: false,
						gcTime: 24 * 60 * 60 * 1000,
						staleTime: 5 * 60 * 1000,
						networkMode: 'offlineFirst'
					},
					mutations: {
						retry: 1,
						networkMode: 'offlineFirst'
					}
				}
			})
	)

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
