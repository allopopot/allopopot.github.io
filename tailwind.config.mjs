/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				"glow-yellow": 'glowYellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				glowYellow: {
					'0%, 100% ': { "box-shadow": '0 0 20px -10px #fde047' },
					'50%': { "box-shadow": '0 0 20px 2px #fde047' },
				}
			}
		},
	},
	plugins: [],
}
