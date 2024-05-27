/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					default: "1rem",
					sm: "3rem",
				},
			},
		},
	},
	plugins: [],
};
