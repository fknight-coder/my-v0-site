import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Gheevana | देसीपन हर बूंद में | Premium Desi Ghee',
  description: 'Gheevana brings you the finest traditional Desi Ghee, crafted using the ancient Bilona method. Pure A2 cow milk ghee made with love and tradition.',
  keywords: ['desi ghee', 'bilona ghee', 'A2 ghee', 'traditional ghee', 'pure ghee', 'gheevana'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
