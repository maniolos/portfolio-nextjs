import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kamil Pawłowski Portfolio',
  description: 'Front-End Developer',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
  
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} dark text-slate-100 `}> 
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
