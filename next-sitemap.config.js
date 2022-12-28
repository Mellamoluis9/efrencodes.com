/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.efrencodes.com/',
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: 'Googlebot',
				allow: '/'
			},
			{
				userAgent: '*',
				allow: '/'
			}
		]
	}
}
