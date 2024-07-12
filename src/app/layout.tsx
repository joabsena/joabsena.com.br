import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <body className={DM_SANS.className}>{children}</body>
    </html>
  );
}
