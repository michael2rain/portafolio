/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'pink': {
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
			'velvet': {
				'50': '#ffecee',
				'100': '#ffd4d8',
				'200': '#ffa7b3',
				'300': '#ff6f86',
				'400': '#ff3562',
				'500': '#ff0e4d',
				'600': '#f20453',
				'700': '#c80652',
				'800': '#9f0d4b',
				'900': '#800e3e',
				DEFAULT: '#0e0107',
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
	plugins: [],
}
