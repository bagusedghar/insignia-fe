import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from '@next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Social Network',
  description: 'Social Network by Bagus Edghar Technical Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body className={`${roboto.className} max-w-screen-lg mx-auto bg-secondary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
