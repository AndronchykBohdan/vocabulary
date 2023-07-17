import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { Providers } from '@/components/wrappers/providers/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vocabulary Next App',
};

export default function RootLayout({ children }: IPropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
