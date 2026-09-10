import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meetings Directory</h2>
                <p className="text-sm text-gray-500 mb-4">Browse, organize, and review sacrament meeting schedules.</p>
                {/* Meetings-specific navigation */}
                <NavLinks />
            </div>
            {children}
        </div>
    );
}