'use client';
import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { Suspense } from 'react';

import { Sidebar } from '@/app/(dashboard)/components/sidebar';
import { CurrentUserChecker } from '@/components/wrappers/currentUserChecker';
import Loading from '@/components/ui/loading';

export default function UserLayout({ children }: IPropsWithChildren) {

  return (
    <CurrentUserChecker>
      <div className="h-full bg-background">
        <div className="flex h-full justify-start">
          <Sidebar className="flex-shrink-0" />

          <div className="flex-grow flex-shrink-0 py-8 relative">
            <div className="container flex flex-col h-full relative">
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </CurrentUserChecker>
  );
}