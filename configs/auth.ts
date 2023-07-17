import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { signIn } from '@/services/firbase';

const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: ({
        email: { label: 'Email', type: 'email', placeholder: 'example@exapmle.com', required: true },
        password: { label: 'Password', type: 'password', required: true },
      }),
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) return null;

        const { result, error } = await signIn(credentials.email, credentials.password);

        if (error || !result) return null;

        return ({
          id: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        });
      },
    }),
  ],
  pages: {
    signIn: '/sign-in'
  }
};

export { authConfig };