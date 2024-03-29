import type { Metadata } from 'next'
import '../app/ui/globals.css'
import { roboto } from './ui/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Utopía',
    default: 'Utopía',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${roboto.className} bg-gray-100 text-gray-900 antialiased`}>{children}</body>
    </html>
  )
}
