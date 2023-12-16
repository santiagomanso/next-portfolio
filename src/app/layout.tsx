import type { Metadata } from 'next'
import './../../globals.css'
import AppContainer from '@/components/app-container'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/navbar/navbar'
import { inconsolata, inter, staatliches } from '@/utils/fonts'

config.autoAddCss = false

export const metadata: Metadata = {
  title:
    'Santiago Manso Castro | Web Developer | JavaScript | TypeScript | React | Next.js',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      className={` ${staatliches.variable} ${inter.variable} ${inconsolata.variable} `}
    >
      <body>
        <AppContainer>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </AppContainer>
      </body>
    </html>
  )
}
