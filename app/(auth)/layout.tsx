'use client';
import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';

export default function AuthLayout({ children }: IPropsWithChildren) {

  return (
    <div className="flex justify-center items-center h-screen">
      {children}
    </div>
  );
}