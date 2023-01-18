/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        minimumCacheTTL: 60000,
    },
    eslint: {
		dirs: ['src'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
}

module.exports = nextConfig
