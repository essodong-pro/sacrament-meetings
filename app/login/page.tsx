import type { Metadata } from 'next';

import LoginForm from '@/components/LoginForm';

export const metadata: Metadata = {
    title: 'Sign In',
    description:
        'Sign in to manage sacrament meeting schedules and meeting details.',
};

export default function LoginPage() {
    return (
        <main className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center">
            <section className="w-full rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Bishopric Sign In
                    </h1>

                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to create and manage sacrament meetings.
                    </p>
                </div>

                <LoginForm />
            </section>
        </main>
    );
}