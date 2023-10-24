/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,css,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'pink': {
				'50': '#fdf2f9',
				'100': '#fce7f5',
				'200': '#fad0ed',
				'300': '#f7aadd',
				'400': '#f175c5',
				'500': '#e94bac',
				'600': '#d72b8b',
				'700': '#bb1b71',
				'800': '#9a1a5d',
				'900': '#811a4f',
				DEFAULT: '#250415',
			},
			'velvet': {
				'50': '#fff0f4',
				'100': '#ffe2ea',
				'200': '#ffcadc',
				'300': '#ff9ebf',
				'400': '#ff679f',
				'500': '#ff3283',
				'600': '#ef0f71',
				'700': '#ca0661',
				'800': '#a90858',
				'900': '#900b51',
				DEFAULT: '#1a000d',
			},
		},
		extend: {
			fontFamily: {
				'sans': ['IBM Plex Sans', defaultTheme.fontFamily.sans],
				'title': ['Dela Gothic One', defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				'3d': '0px -4px 0px 0px rgba(14, 1, 7, 0.50) inset, 0px 3px 0px 0px rgba(128, 14, 62, 0.25) inset',
				'3d-hover': '0px -4px 0px 0px rgba(14, 1, 7, 0.50) inset, 0px 3px 0px 0px rgba(128, 14, 62, 0.25) inset',
				'3d-active': '0px 0px 0px 0px rgba(14, 1, 7, 0.50) inset, 0px 4px 0px 0px rgba(14, 1, 7, 0.25) inset',
				'3d-button': '0px -4px 0px 0px rgba(14, 1, 7, 0.50) inset, 0px 2px 0px 0px rgba(128, 14, 62, 0.25) inset',
				'3d-button-active': '0px 4px 0px 0px rgba(14, 1, 7, 0.50) inset, 0px -2px 0px 0px rgba(128, 14, 62, 0.25) inset',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
