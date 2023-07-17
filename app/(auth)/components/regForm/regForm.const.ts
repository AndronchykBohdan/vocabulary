import * as z from 'zod';

const formSchema = z.object({
  email: z.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
  password: z.string().nonempty('This is required').min(8, { message: 'Too short' }),
});

export { formSchema };