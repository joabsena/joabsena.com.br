import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components';

const DM_SANS = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joab Sena',
  description: 'Welcome'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={DM_SANS.className}>
      <body className="dark:bg-neutral-900 dark:text-neutral-200 overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
