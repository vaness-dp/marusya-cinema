import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		domains: ['cinemaguide.skillbox.cc']
	}
}

export default nextConfig
