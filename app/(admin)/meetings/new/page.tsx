import CreateMeetingForm from '@/components/CreateMeetingForm';

export default function NewMeetingPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Create Meeting
      </h1>

      <p className="mt-2 text-gray-600">
        Enter the information for the sacrament meeting.
      </p>

      <CreateMeetingForm />
    </main>
  );
}