import { UserCredential } from '@firebase/auth';

export interface ISignIn {
  result: UserCredential | null
  error: unknown;
}