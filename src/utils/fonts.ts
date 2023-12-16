import { Inconsolata, Inter, Staatliches } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const staatliches = Staatliches({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-Staatliches',
})

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-inconsolata',
})
