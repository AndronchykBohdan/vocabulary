'use client';
import { useSession, signOut as nextAuthSignOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { signOut } from '@firebase/auth';
import { auth } from '@/configs/firebase.config';

export default function Page() {
  const session = useSession();

  console.log(session);

  const logOut = async () => {
    await signOut(auth);
    nextAuthSignOut({
      callbackUrl: '/sign-in'
    })
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={logOut}> Sign out</Button>
    </>
  );
}