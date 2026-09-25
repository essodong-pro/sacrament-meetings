'use client';

import Link from 'next/link';

type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function ErrorPage({
    error,
    reset,
}: ErrorPageProps) {
    console.error(error);

    return (
        <main className="mx-auto max-w-4xl p-6">
            <h1 className="text-2xl font-bold text-gray-900">
                Something went wrong
            </h1>

            <p className="mt-2 text-gray-600">
                We could not complete that request. Please try again.
            </p>

            <div className="mt-6 flex gap-4">
                <button
                    type="button"
                    onClick={() => reset()}
                    className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                >
                    Try Again
                </button>

                <Link
                    href="/meetings"
                    className="rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                >
                    Back to Meetings
                </Link>
            </div>
        </main>
    );
}