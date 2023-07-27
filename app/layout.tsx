import type { Metadata } from 'next';

import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { Providers } from '@/components/wrappers/providers/Providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vocabulary Next App',
};

export default function RootLayout({ children }: IPropsWithChildren) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
