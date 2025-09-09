import type { Metadata, Viewport } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { Header } from '@/components/header';

import ogImage from './og.png';
import { Analytics } from '@/components/analytics';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
// import { SnowfallComponent } from '@/components/snowfall';
import { Toaster } from 'sonner';
import { Banner } from '@/components/ui/banner';
import { LINK } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import { PackageNameProvider } from '@/providers/package-name';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icons.pqoqubbw.dev'),
  openGraph: {
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    siteName: 'pqoqubbw/icons',
    type: 'website',
    locale: 'en_US',
    url: 'https://icons.pqoqubbw.dev',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'pqoqubbw/icons',
  appleWebApp: {
    title: 'pqoqubbw/icons',
    statusBarStyle: 'default',
    capable: true,
  },
  title: {
    default: 'pqoqubbw/icons',
    template: `%s - pqoqubbw/icons`,
  },
  description: 'beautifully crafted animated icons',
  twitter: {
    card: 'summary_large_image',
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    creator: '@pqoqubbw',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
<script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-S69M9RGY23');
  `}
</script>
      </head>
      <body
        className={`${geistMono.className} antialiased relative bg-background dark:bg-[#151515]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PackageNameProvider>
            <a href={LINK.HELPY_UI} target="_blank" className="group">
              <Banner variant="rainbow" className="h-10 md:text-sm text-xs">
                <p className="group-hover:underline underline-offset-4">
                  🎉 helpy-ui - warm blanket for your projects
                </p>
                <ArrowUpRight
                  className="size-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0"
                  strokeWidth={2}
                />
              </Banner>
            </a>
            <Header />
            <NuqsAdapter>
              {children}
              <Toaster theme="light" position="bottom-right" />
              {/* <SnowfallComponent /> */}
            </NuqsAdapter>
            <Analytics />
          </PackageNameProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}
