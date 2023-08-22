import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Montserrat } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'AM Açaiteria',
  description: 'A melhor açaiteria da região.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} bg-violet-950 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
