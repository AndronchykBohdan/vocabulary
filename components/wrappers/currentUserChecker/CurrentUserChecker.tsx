'use client';
import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { useGetCurrentUser } from '@/hooks/api';
import Loading from '@/components/ui/loading';

const CurrentUserChecker = ({ children }: IPropsWithChildren) => {
  const { isLoading, data } = useGetCurrentUser();

  if (isLoading) return <Loading/>;

  if (!data) return <div>oops</div>;

  return <>{children}</>;
};

export { CurrentUserChecker };