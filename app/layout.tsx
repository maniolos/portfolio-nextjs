import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kamil Pawłowski | Portfolio',
  description: 'Front-End Developer',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
  
}) {
  return (
    <html lang="en" className='dark '>
      <body className={`${inter.className}`}> 
        <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-stone-800 to-stone-900 min-h-screen'>
          <Providers>
          {children}
          </Providers>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
