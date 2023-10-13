import './globals.css'
import { Inter } from 'next/font/google'
import { Jockey_One } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const jockey = Jockey_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: 'Havitech Corps',
  description: 'Stellar Hardware and Software Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
