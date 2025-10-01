import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edward Henriquez - Portfolio',
  description: 'A passionate developer creating beautiful, functional, and user-centered digital experiences.',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'nextjs'],
  authors: [{ name: 'Edward Henriquez' }],
  openGraph: {
    title: 'Edward Henriquez - Portfolio',
    description: 'A passionate developer creating beautiful, functional, and user-centered digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}