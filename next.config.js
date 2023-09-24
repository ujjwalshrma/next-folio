/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.prismic.io',
			},
		],
	},
}

module.exports = nextConfig
