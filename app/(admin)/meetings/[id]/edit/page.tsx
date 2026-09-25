import { notFound } from 'next/navigation';
import EditMeetingForm from '@/components/EditMeetingForm';
import { getMeetingById } from '@/lib/meetings-db';

type EditMeetingPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditMeetingPage({
  params,
}: EditMeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Edit Meeting
      </h1>

      <p className="mt-2 text-gray-600">
        Update the information for this sacrament meeting.
      </p>

      <EditMeetingForm meeting={meeting} />
    </main>
  );
}