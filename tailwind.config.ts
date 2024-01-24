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
          '50': '#effcfb',
          '100': '#d5f7f8',
          '200': '#b0eef1',
          '300': '#7ae0e6',
          '400': '#3dc9d3',
          '500': '#1fa2ad',
          '600': '#1e8c9c',
          '700': '#1f717f',
          '800': '#225c68',
          '900': '#204d59',
          '950': '#10333c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
