import type {Config} from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "475px",
			},
			colors: {
				primary: {
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#b9e5fe',
					'300': '#7cd1fd',
					'400': '#36bffa',
					'500': '#0ca6eb',
					DEFAULT: '#0284c7',
					'700': '#036ba1',
					'800': '#075985',
					'900': '#0c4a6e',
				},
				secondary: {
					'50': '#f8f9fa',
					'100': '#f1f3f5',
					DEFAULT: '#495057',
					'700': '#343a40',
					'800': '#212529',
				},
				accent: {
					'100': '#fff1e6',
					DEFAULT: '#ff922b',
					'700': '#e67700',
				},
				success: {
					'100': '#dcfce7',
					DEFAULT: '#22c55e',
					'700': '#15803d',
				},
				warning: {
					'100': '#fef9c3',
					DEFAULT: '#eab308',
					'700': '#a16207',
				},
				error: {
					'100': '#fee2e2',
					DEFAULT: '#ef4444',
					'700': '#b91c1c',
				},
				gray: {
					'50': '#f9fafb',
					'100': '#f3f4f6',
					'200': '#e5e7eb',
					'300': '#d1d5db',
					'400': '#9ca3af',
					'500': '#6b7280',
					'600': '#4b5563',
					'700': '#374151',
					'800': '#1f2937',
					'900': '#111827',
				}
			},
			fontFamily: {
				"work-sans": ["var(--font-work-sans)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				100: "2px 2px 0px 0px rgb(0, 0, 0)",
				200: "2px 2px 0px 2px rgb(0, 0, 0)",
				300: "2px 2px 0px 2px rgb(238, 43, 105)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;