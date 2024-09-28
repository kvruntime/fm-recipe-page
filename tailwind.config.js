/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{tsx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"outfit"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
