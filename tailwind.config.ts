import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        helvetica: ['var(--font-helvetica)'],
        natoSansRegular: ['var(--font-natoSans-regular)'],
      },
      screens: {
        'xs': '375px',
        'md': '768px',
      },
      colors: {
        'purple-50': '#6138f5'
      }
    },
  },
  plugins: [],
}
export default config
