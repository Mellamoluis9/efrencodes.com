/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    eslint: {
		dirs: ['src'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
}

module.exports = nextConfig
