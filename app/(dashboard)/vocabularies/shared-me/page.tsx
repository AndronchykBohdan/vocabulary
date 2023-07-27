'use client';
import { signOut as nextAuthSignOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { signOut } from '@firebase/auth';
import { auth } from '@/configs/firebase.config';
import { useGetCurrentUser } from '@/hooks/api/useGetCurrentUser/useGetCurrentUser';

export default function Page() {
  const { isLoading, data } = useGetCurrentUser();

  const logOut = async () => {
    await signOut(auth);
    await nextAuthSignOut({
      callbackUrl: '/sign-in',
    });
  };

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <h1>Shared for me</h1>

      <div>
        {JSON.stringify(data?.surname)}
      </div>

      <Button onClick={logOut}> Sign out</Button>
    </>
  );
}