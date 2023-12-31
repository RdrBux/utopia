import { Roboto_Slab, Roboto } from 'next/font/google';

export const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
