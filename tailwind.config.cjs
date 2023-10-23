/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,css,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'pink': {
				'50': '#fdf2f9',
				'100': '#fce7f6',
				'200': '#fbcfee',
				'300': '#f9a8df',
				'400': '#f472c8',
				'500': '#eb49af',
				'600': '#da288f',
				'700': '#bd1973',
				'800': '#9d175f',
				'900': '#831852',
				DEFAULT: '#210313',
			},
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
