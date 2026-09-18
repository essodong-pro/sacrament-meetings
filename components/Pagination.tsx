'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function createPageURL(
    pathname: string,
    searchParams: URLSearchParams,
    pageNumber: number
) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
}

export default function Pagination({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav
            className="flex items-center justify-center gap-4"
            aria-label="Pagination"
        >
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(pathname, searchParams, currentPage - 1)}
                    className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
                >
                    Previous
                </Link>
            ) : (
                <span className="rounded-lg border border-gray-200 px-4 py-2 text-gray-400">
                    Previous
                </span>
            )}

            <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(pathname, searchParams, currentPage + 1)}
                    className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
                >
                    Next
                </Link>
            ) : (
                <span className="rounded-lg border border-gray-200 px-4 py-2 text-gray-400">
                    Next
                </span>
            )}
        </nav>
    );
}