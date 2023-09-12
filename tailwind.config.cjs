/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'darkPink': '#0E0107',
			'velvet': '#17020D',
			'electricPink': '#ED78B1',
			'featureText': '#FFE5FF',
			'velvet': '#17020D',
			'velvet': '#17020D',
		},
		extend: {
			fontFamily: {
				'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'title': ['Dela Gothic One', 'ui-sans-serif', 'system-ui', '-apple-system']
			},
		},
	},
	plugins: [],
}
