import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '50': '#f2fbfa',
          '100': '#d4f3ef',
          '200': '#a9e6df',
          '300': '#76d2cb',
          '400': '#4ab7b2',
          '500': '#309c99',
          '600': '#247d7d',
          '700': '#216364',
          '800': '#1e5151',
          '900': '#1d4444',
          '950': '#0d2b2d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
