import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/configs/firebase.config';

import { ISignIn } from './signIn.interface';


const signIn = async (email: string, password: string): Promise<ISignIn> => {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export { signIn };