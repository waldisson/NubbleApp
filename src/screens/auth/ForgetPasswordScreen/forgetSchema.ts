import {z} from 'zod';

export const forgetSchema = z.object({
  email: z.string().email('email inválido'),
});

export type ForgetSchema = z.infer<typeof forgetSchema>;
