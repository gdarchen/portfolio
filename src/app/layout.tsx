import { FC, PropsWithChildren } from 'react'
import { Metadata } from 'next'
import Script from 'next/script'

import Header from '@/components/header/Header'
import ScreenSizeDetector from '@/components/screen-size-detector/ScreenSizeDetector'
import { WEBSITE_URL } from '@/constants/globals'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import 'aos/dist/aos.css'

type Props = PropsWithChildren

const title = 'Gautier Darchen - Senior Software Engineer'
const description =
  'Passionate Senior Software Engineer who wants to have an impact on our society'
const image = '/website.png'

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Gautier Darchen's portfolio",
  authors: [{ name: 'Gautier Darchen', url: WEBSITE_URL }],
  metadataBase: new URL(WEBSITE_URL),
  twitter: {
    card: 'summary_large_image',
    site: '@gdarchen',
    creator: '@gdarchen',
    title,
    images: image,
  },
  openGraph: {
    type: 'website',
    title,
    description,
    siteName: 'Gautier DARCHEN',
    images: [{ url: image }],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
}

const CSQLiteScript: FC = () => {
  return (
    <Script id="csq-lite">
      {`(function (c, s, q, u, a, r, e) {
          c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
          c._hjSettings = { hjid: a };
          r = s.getElementsByTagName('head')[0];
          e = s.createElement('script');
          e.async = true;
          e.src = q + c._hjSettings.hjid + u;
          r.appendChild(e);
      })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5230603);`}
    </Script>
  )
}

const RootLayout: FC<Props> = ({ children }) => {
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" translate="no">
      <head>
        {/* React Slick CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <CSQLiteScript />
      </head>
      <body>
        <div className="relative min-h-screen w-full snap-mandatory bg-background-light dark:bg-background">
          <Header />
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
        {!isProd && <ScreenSizeDetector />}
      </body>
    </html>
  )
}

export default RootLayout
