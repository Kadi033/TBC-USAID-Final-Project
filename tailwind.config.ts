import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			beige: {
  				'100': '#F8F4F0',
  				'500': '#98908B'
  			},
  			slate: {
  				'600': '#666CA3'
  			},
  			grey: {
  				'100': '#F2F2F2',
  				'300': '#B3B3B3',
  				'500': '#696868',
  				'900': '#201F24'
  			},
  			green: '#277C78',
  			yellow: '#F2CDAC',
  			cyan: '#82C9D7',
  			navy: '#626070',
  			red: '#C94736',
  			purple: '#826CB0',
  			other: {
  				purple: '#AF81BA',
  				turquoise: '#597C7C',
  				brown: '#93674F',
  				magenta: '#934F6F',
  				blue: '#3F82B2',
  				navyGrey: '#97A0AC',
  				armyGreen: '#7F9161',
  				gold: '#CAB361',
  				orange: '#BE6C49'
  			},
  			white: '#FFFFFF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Public Sans Bold',
  				'sans-serif'
  			],
  			mono: [
  				'Public Sans Regular',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'preset-1': [
  				'32px',
  				'120%'
  			],
  			'preset-2': [
  				'20px',
  				'120%'
  			],
  			'preset-3': [
  				'16px',
  				'150%'
  			],
  			'preset-4': [
  				'14px',
  				'150%'
  			],
  			'preset-5': [
  				'12px',
  				'150%'
  			]
  		},
  		spacing: {
  			'50': '4px',
  			'100': '8px',
  			'150': '12px',
  			'200': '16px',
  			'250': '20px',
  			'300': '24px',
  			'400': '32px',
  			'500': '40px'
  		},
  	}
  },
};

export default config;
