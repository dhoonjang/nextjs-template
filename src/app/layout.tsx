import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dhoonjang nextjs template',
  description: 'template for nextjs project',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
