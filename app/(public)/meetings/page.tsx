import MeetingCard from '@/components/MeetingCard';
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import {
    getMeetings,
    getMeetingsTotalPages,
} from '@/lib/meetings-db';

interface PageProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}

export default async function MeetingsPage({ searchParams }: PageProps) {
    const params = await searchParams;

    const query = params.query?.trim().slice(0, 100) ?? '';

    const pageNumber = Number(params.page ?? '1');
    const currentPage =
        Number.isInteger(pageNumber) && pageNumber > 0 ? pageNumber : 1;

    const [meetings, totalPages] = await Promise.all([
        getMeetings(query, currentPage),
        getMeetingsTotalPages(query),
    ]);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
                All Sacrament Meetings
            </h1>

            <MeetingSearch />

            {meetings.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {meetings.map((meeting) => (
                        <MeetingCard key={meeting.id} meeting={meeting} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">
                    No meetings found.
                </p>
            )}

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </div>
    );
}