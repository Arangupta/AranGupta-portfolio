import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aran Gupta - Unity Game Developer',
  description: 'Portfolio website of Aran Gupta, a Unity Game Developer and AI Animation Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' pt-24'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 