/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'title': ['Dela Gothic One', 'ui-sans-serif', 'system-ui', '-apple-system']
			},
			colors: {
				'darkPink': '#0E0107',
				'velvet': {
					'50': '#fff1f8',
					'100': '#ffe0f0',
					'200': '#ffc7e4',
					'300': '#ffa0d2',
					'400': '#ff69b8',
					'500': '#fa399e',
					'600': '#e71b86',
					'700': '#c3126f',
					'800': '#a1135d',
					'900': '#851751',
					DEFAULT: '#17020d',
				},
				
			},
		},
	},
	plugins: [],
}
