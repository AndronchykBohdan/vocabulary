'use client';
import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { useSession } from 'next-auth/react';
import Loading from '@/components/ui/loading';

const SessionChecker = ({ children }: IPropsWithChildren) => {
  const session = useSession();

  if (session.status === 'loading') return <Loading/>;

  return <>{children}</>;
};

export { SessionChecker };