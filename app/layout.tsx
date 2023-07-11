import Navbar from '@/components/ui/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cerro Porteño',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Navbar/>
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}