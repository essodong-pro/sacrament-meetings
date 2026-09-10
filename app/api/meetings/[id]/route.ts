import { getMeetingById } from '@/lib/meetings-db';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> | { id: string } }
) {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);

    if (isNaN(id)) {
        return Response.json({ error: 'Invalid ID parameter' }, { status: 400 });
    }

    const meeting = getMeetingById(id);

    if (!meeting) {
        return Response.json({ error: 'Meeting not found' }, { status: 404 });
    }

    return Response.json(meeting);
}