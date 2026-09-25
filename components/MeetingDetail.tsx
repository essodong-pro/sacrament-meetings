'use client';

import Link from 'next/link';
import { deleteMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

export default function MeetingDetail({
    meeting,
}: {
    meeting: SacramentMeeting;
}) {
    const deleteMeetingWithId = deleteMeeting.bind(null, meeting.id);

    return (
        <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-8 max-w-4xl mx-auto print:shadow-none print:border-none">
            {/* Header Info */}
            <div className="border-b border-gray-200 pb-6 mb-6 text-center">
                <span className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold mb-2">
                    {meeting.meetingType} Meeting • {meeting.date}
                </span>

                <h2 className="text-3xl font-extrabold text-gray-900">
                    Ward Sacrament Program
                </h2>

                <div className="mt-2 text-sm text-gray-600 flex justify-center space-x-6">
                    <p>
                        <span className="font-semibold">Presiding:</span>{' '}
                        {meeting.presiding}
                    </p>

                    <p>
                        <span className="font-semibold">Conducting:</span>{' '}
                        {meeting.conducting}
                    </p>
                </div>
            </div>

            {/* Announcements */}
            {meeting.announcements &&
                meeting.announcements.length > 0 && (
                    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide mb-1">
                            Announcements
                        </h4>

                        <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                            {meeting.announcements.map((ann, idx) => (
                                <li key={idx}>{ann}</li>
                            ))}
                        </ul>
                    </div>
                )}

            {/* Agenda Items */}
            <div className="space-y-4 text-gray-800">
                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">
                        Opening Hymn (No. {meeting.openingHymn.number}):
                    </span>
                    <span>{meeting.openingHymn.title}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">
                        Opening Prayer:
                    </span>
                    <span>{meeting.openingPrayer}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">
                        Ward Business:
                    </span>
                    <span>
                        {meeting.wardBusiness.length > 0
                            ? meeting.wardBusiness
                                .map((b) => b.description)
                                .join(', ')
                            : 'None'}
                    </span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">
                        Sacrament Hymn (No. {meeting.sacramentHymn.number}):
                    </span>
                    <span>{meeting.sacramentHymn.title}</span>
                </div>

                <div className="py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">
                        Speakers & Musical Numbers:
                    </h4>

                    <ul className="space-y-2 pl-4">
                        {meeting.speakers.map((speaker, idx) => (
                            <li
                                key={idx}
                                className="text-sm bg-gray-50 p-2 rounded flex justify-between"
                            >
                                <span>
                                    <strong className="text-gray-900">
                                        {speaker.name}
                                    </strong>{' '}
                                    {speaker.topic
                                        ? `— "${speaker.topic}"`
                                        : ''}
                                </span>

                                <span className="text-xs uppercase bg-gray-200 text-gray-700 px-2 py-0.5 rounded h-fit">
                                    {speaker.type}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-between border-b pb-2 pt-2">
                    <span className="font-semibold">
                        Closing Hymn (No. {meeting.closingHymn.number}):
                    </span>
                    <span>{meeting.closingHymn.title}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">
                        Closing Prayer:
                    </span>
                    <span>{meeting.closingPrayer}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-center gap-4 print:hidden">
                <Link
                    href={`/meetings/${meeting.id}/edit`}
                    className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
                >
                    Edit Meeting
                </Link>

                <button
                    type="button"
                    onClick={() => window.print()}
                    className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors font-medium text-sm shadow"
                >
                    Print Program
                </button>

                <form action={deleteMeetingWithId}>
                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium text-sm shadow"
                    >
                        Delete Meeting
                    </button>
                </form>
            </div>
        </div>
    );
}