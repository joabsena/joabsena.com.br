import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const DM_SANS = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovô Kassio',
  description: 'Parabéns'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={DM_SANS.className} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-primary text-primary-dark">
        <main className="container mx-auto min-h-full max-w-3xl mt-12 md:mt-28">{children}</main>
      </body>
    </html>
  );
}
