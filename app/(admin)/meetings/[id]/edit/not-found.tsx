import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="mx-auto max-w-4xl p-6">
            <h1 className="text-2xl font-bold text-gray-900">
                Meeting Not Found
            </h1>

            <p className="mt-2 text-gray-600">
                The meeting you are trying to edit could not be found.
            </p>

            <Link
                href="/meetings"
                className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
                Back to Meetings
            </Link>
        </main>
    );
}