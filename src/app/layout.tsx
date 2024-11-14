import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import '@/styles/gooey.css';
import { Overlay } from '@/components/overlay';
import { Gooey } from '@/components';

const DM_SANS = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joab Sena - Software Engineer',
  description: 'Welcome'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={DM_SANS.className} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-primary text-primary-dark">
        <Overlay />
        <Gooey />
        <main className="container mx-auto min-h-full max-w-3xl mt-12 md:mt-28">{children}</main>
      </body>

      <Analytics />
      <SpeedInsights />
    </html>
  );
}
