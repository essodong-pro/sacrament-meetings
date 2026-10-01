'use server';

import { AuthError } from 'next-auth';

import { signIn, signOut } from '@/auth';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                return 'Invalid email or password.';
            }

            return 'Something went wrong. Please try again.';
        }

        throw error;
    }

    return prevState;
}

export async function signOutAction() {
    await signOut({
        redirectTo: '/',
    });
}