import { UserCredential } from '@firebase/auth';

export interface ISignUp {
  result: UserCredential | null
  error: unknown;
}