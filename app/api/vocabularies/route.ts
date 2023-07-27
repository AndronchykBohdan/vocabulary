import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { IVocabulariesRequestDto } from '@/shared/interfaces/api/vocabularies/vocabulariesRequest.dto.interface';
import { collection, doc, getDocs, query, setDoc, where } from '@firebase/firestore';
import { db } from '@/configs/firebase.config';
import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { uuidv4 } from '@firebase/util';
import { IVocabulariesResponseDto } from '@/shared/interfaces/api/vocabularies/vocabulariesResponse.dto.interface';
import { IVocabulariesDto } from '@/shared/interfaces/api/vocabularies/vocabularies.dto.intreface';

export async function GET() {
  let error;
  let docsSnap;
  let data: IVocabulariesDto[] = [];

  const session = await getServerSession();
  if (!session?.user?.email) return NextResponse.json({ message: 'Session filed' }, { status: 500 });

  try {
    const collectionRef = collection(db, EApiKeys.vocabularies);
    const userCollections = query(collectionRef, where("ownerUserId", '==', session.user.email));
    docsSnap = await getDocs(userCollections);
    docsSnap.forEach(doc => data.push(doc.data() as IVocabulariesDto))
  } catch (e) {
    error = e;
  }

  if (error) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

  const response = {
    data,
  }

  return NextResponse.json<IVocabulariesResponseDto>(response, { status: 200 });
}

export async function POST(req: Request) {
  let error;
  const body: IVocabulariesRequestDto = await req.json();
  const id = uuidv4();
  const session = await getServerSession();

  if (!session?.user?.email) return NextResponse.json({ message: 'Session filed' }, { status: 500 });

  try {
    await setDoc(doc(db, EApiKeys.vocabularies, id), { ...body, ownerUserId: session.user.email, words: [] });
  } catch (e) {
    error = e;
  }

  if (error) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

  return NextResponse.json<IVocabulariesDto>({
    id,
    ...body,
    ownerUserId: session.user.email,
    words: [],
  }, { status: 200 });
}
