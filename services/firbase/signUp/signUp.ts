import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/configs/firebase.config';

import { ISignUp } from './signUp.interface';


const signUp = async (email: string, password: string): Promise<ISignUp> => {
  let result = null;
  let error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export { signUp };