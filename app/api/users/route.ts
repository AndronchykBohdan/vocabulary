import { NextResponse } from 'next/server';

import { db } from '@/configs/firebase.config';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { IUserDtoRequest } from '@/shared/interfaces/api/user/userDto.request.interface';
import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { getServerSession } from 'next-auth';

export const POST = async (req: Request) => {
  const body: IUserDtoRequest = await req.json();
  if (!body) return NextResponse.json({ message: 'body filed' }, { status: 500 });
  try {
    await setDoc(doc(db, EApiKeys.users, body.email), body);
  } catch (e) {
    return NextResponse.json({ message: 'Error'}, {status: 200});
  }

  return NextResponse.json(body);
};

export const GET = async () => {
  const session = await getServerSession();
  if (!session?.user?.email) return NextResponse.json({ message: 'Session filed' }, { status: 500 });

  const docRef = doc(db, EApiKeys.users, session.user.email);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    }
    return NextResponse.json({ message: 'docSnap not exists' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ message: 'Error', error: e}, { status: 500 });
  }
};


