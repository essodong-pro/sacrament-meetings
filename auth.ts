import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

import { authConfig } from './auth.config';

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'bishopric@example.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                const parsedCredentials = LoginSchema.safeParse(credentials);

                if (!parsedCredentials.success) {
                    return null;
                }

                const email = process.env.AUTH_BISHOP_EMAIL;
                const passwordHash = process.env.AUTH_BISHOP_PASSWORD_HASH;

                if (!email || !passwordHash) {
                    throw new Error(
                        'AUTH_BISHOP_EMAIL and AUTH_BISHOP_PASSWORD_HASH must be configured.'
                    );
                }

                if (
                    parsedCredentials.data.email.toLowerCase() !==
                    email.toLowerCase()
                ) {
                    return null;
                }

                const passwordMatches = await bcrypt.compare(
                    parsedCredentials.data.password,
                    passwordHash
                );

                if (!passwordMatches) {
                    return null;
                }

                return {
                    id: 'bishopric-admin',
                    name: 'Bishopric',
                    email,
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
});