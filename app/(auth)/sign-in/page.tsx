'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/vocabularies');
  };

  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // TODO Create card component
  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
      <h1 className="text-lg font-bold text-center mb-4">
        Sign in
      </h1>

      <form
        onSubmit={handleForm}
        className="form"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={emailInputHandler}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={passwordInputHandler}
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}