'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { formSchema } from './regForm.const';
import { IRegForm } from './regForm.interface';
import Link from 'next/link';
import { signUp } from '@/services/firbase';
import { useEffect, useState } from 'react';

const RegForm = (props: IRegForm) => {
  const { mode } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/vocabularies');
    }
  }, [session]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newData = {
      email: values.email,
      password: values.password,
    };

    setLoading(true);
    if (mode === 'signUp') {
      const { result, error } = await signUp(newData.email, newData.password);
      if (error || !result) return;
    }

    const response = await signIn('credentials', {
      ...newData,
      redirect: false,
    });

    if (response && response.error) return;
    setLoading(false);
    router.push('/vocabularies');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-center items-center">
          <Button
            className="mb-4"
            type="submit"
            disabled={loading}
          >
            {loading
              ? 'Loading ...'
              : mode === 'signIn'
                ? 'Sign In'
                : 'Sign Up'
            }
          </Button>

          {mode === 'signIn'
            ? <p className="text-xs">Don`t have account? <Link
              className="text-xs text-sky-400" href="/sign-up"
            >Create</Link></p>
            : null
          }

          {mode === 'signUp'
            ? <p className="text-xs">Do you have account? <Link className="text-xs text-sky-400" href="/sign-in">Sign
              in</Link></p>
            : null
          }
        </div>
      </form>
    </Form>
  );
};

export { RegForm };