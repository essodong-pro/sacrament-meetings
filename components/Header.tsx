import Link from 'next/link';

import { auth } from '@/auth';
import { signOutAction } from '@/lib/auth-actions';
import NavLinks from '@/components/NavLinks';

export default async function Header() {
    const session = await auth();

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <header className="bg-blue-900 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link href="/" className="block">
                            <h1 className="text-2xl font-bold tracking-tight">
                                Sacrament Meeting Planner
                            </h1>
                        </Link>

                        <p className="text-blue-200 text-sm mt-1">
                            Riverdale Ward &bull; Stake Management Portal
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-3 sm:items-end">
                        <span className="text-xs uppercase tracking-wider bg-blue-800 px-3 py-1 rounded-full text-blue-100">
                            {currentDate}
                        </span>

                        {session?.user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-blue-100">
                                    {session.user.email}
                                </span>

                                <form action={signOutAction}>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-900 hover:bg-blue-50"
                                    >
                                        Sign out
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-900 hover:bg-blue-50"
                            >
                                Bishopric Sign in
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            <NavLinks />
        </>
    );
}