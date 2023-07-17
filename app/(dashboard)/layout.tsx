import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
export default function UserLayout({children}: IPropsWithChildren) {
  return (
    <div>
      User dashboard layout

      {children}
    </div>
  )
}