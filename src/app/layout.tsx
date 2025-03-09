import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description:
    'A dynamic and visually engaging portfolio built with Next.js, styled with Tailwind CSS, and enhanced with smooth CSS animations. Showcasing my projects, skills, and creativity with a modern, responsive, and interactive design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
