import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
    try {
        const res = await fetch(`http://localhost:3000/api/meetings/${id}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch {
        const { getMeetingById } = await import('@/lib/meetings-db');
        return getMeetingById(Number(id));
    }
}

export default async function MeetingDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const meeting = await getMeeting(resolvedParams.id);

    if (!meeting) {
        notFound();
    }

    return <MeetingDetail meeting={meeting} />;
}