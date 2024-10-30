import type { Metadata } from 'next';
import './globals.css';
import AppContainer from '@/components/app-container';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/navbar';
import { inconsolata, inter, staatliches } from '@/utils/fonts';
import ThemeProvider from '@/components/theme-provider';
import NavigationProvider from '@/context/navigation-context';

config.autoAddCss = false;

export const metadata: Metadata = {
  title:
    'Santiago Manso Castro | Web Developer | JavaScript | TypeScript | React | Next.js',
  description: 'Portfolio website',
  openGraph: {
    title: 'Santiago Manso Castro | Web Developer',
    description:
      'Portfolio website showcasing work in JavaScript, TypeScript, React, and Next.js',
    url: 'https://santimanso.com', //  website URL
    images: [
      {
        url: '/screenshots/og/og.png',
        width: 1200,
        height: 630,
        alt: 'Santiago Manso Castro Portfolio OG Image',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={` ${staatliches.variable} ${inter.variable} ${inconsolata.variable} `}
    >
      <body>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <AppContainer>
            <NavigationProvider>
              <LanguageProvider>
                <Navbar />
                {children}
              </LanguageProvider>
            </NavigationProvider>
          </AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
