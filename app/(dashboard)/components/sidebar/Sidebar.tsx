'use client';
import { HTMLAttributes } from 'react';
import { Book } from 'lucide-react';
import { BookUp } from 'lucide-react';
import Link from 'next/link';
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { signOut } from '@firebase/auth';
import { auth } from '@/configs/firebase.config';
import { Separator } from '@/components/ui/separator';


interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
}

function Sidebar({ className }: SidebarProps) {
  const currentRoute = usePathname();

  const logOut = async () => {
    await signOut(auth);
    await nextAuthSignOut({
      callbackUrl: '/sign-in',
    });
  };

  return (
    <div
      className={cn(
        'flex',
        'flex-col',
        'justify-between',
        'pb-12',
        'h-full',
        'p-4',
        'w-[300px]',
        'border-r-2',
        className,
      )}
    >
      <div>
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Logo
        </h2>

        <div className="space-y-2">
          <Link
            className={cn(
              'bg-white',
              'p-2',
              'flex',
              'items-center',
              'rounded-md',
              'w-full',
              'justify-start',
              'transition',
              'duration-500',
              'ease-in-out',
              'hover:bg-secondary',
              currentRoute === '/vocabularies/my' ? 'bg-secondary/80' : null,
            )}
            href="/vocabularies/my"
          >
            <Book className="mr-2 flex-shrink-0" size={18} />
            My vocabularies
          </Link>
          <Link
            className={cn(
              'bg-white',
              'p-2',
              'flex',
              'items-center',
              'rounded-md',
              'w-full',
              'justify-start',
              'duration-500',
              'transition',
              'ease-in-out',
              'hover:bg-secondary',
              currentRoute === '/vocabularies/shared-me' ? 'bg-secondary/80' : null,
            )}
            href="/vocabularies/shared-me"
          >
            <BookUp className="mr-2 flex-shrink-0" size={18} />
            Shared vocabularies
          </Link>
        </div>
      </div>

      <div>
        User info

        <Button onClick={logOut}> Sign out</Button>
      </div>
    </div>
  );
}

export { Sidebar };