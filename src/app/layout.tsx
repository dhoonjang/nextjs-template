import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dhoonjang next js template',
  description: "dhoonjang's next js template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
