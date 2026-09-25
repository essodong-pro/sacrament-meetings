'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = {
    message: '',
    errors: {},
};

export default function CreateMeetingForm() {
    const [state, formAction] = useActionState(
        createMeeting,
        initialState
    );

    return (
        <form action={formAction} className="mt-6 space-y-6">
            <div>
                <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                >
                    Meeting Date
                </label>

                <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    aria-describedby="date-error"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />

                <div
                    id="date-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.date?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="meetingType"
                    className="block text-sm font-medium text-gray-700"
                >
                    Meeting Type
                </label>

                <select
                    id="meetingType"
                    name="meetingType"
                    required
                    aria-describedby="meetingType-error"
                    defaultValue=""
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                >
                    <option value="" disabled>
                        Select a meeting type
                    </option>
                    <option value="testimony">Testimony</option>
                    <option value="regular">Regular</option>
                    <option value="stake">Stake</option>
                    <option value="general">General</option>
                </select>

                <div
                    id="meetingType-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.meetingType?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="presiding"
                    className="block text-sm font-medium text-gray-700"
                >
                    Presiding
                </label>

                <input
                    id="presiding"
                    name="presiding"
                    type="text"
                    required
                    aria-describedby="presiding-error"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />

                <div
                    id="presiding-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.presiding?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="conducting"
                    className="block text-sm font-medium text-gray-700"
                >
                    Conducting
                </label>

                <input
                    id="conducting"
                    name="conducting"
                    type="text"
                    required
                    aria-describedby="conducting-error"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />

                <div
                    id="conducting-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.conducting?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="openingPrayer"
                    className="block text-sm font-medium text-gray-700"
                >
                    Opening Prayer
                </label>

                <input
                    id="openingPrayer"
                    name="openingPrayer"
                    type="text"
                    required
                    aria-describedby="openingPrayer-error"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />

                <div
                    id="openingPrayer-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.openingPrayer?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="closingPrayer"
                    className="block text-sm font-medium text-gray-700"
                >
                    Closing Prayer
                </label>

                <input
                    id="closingPrayer"
                    name="closingPrayer"
                    type="text"
                    required
                    aria-describedby="closingPrayer-error"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />

                <div
                    id="closingPrayer-error"
                    aria-live="polite"
                    className="mt-1 text-sm text-red-600"
                >
                    {state.errors?.closingPrayer?.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            </div>

            {state.message && (
                <p
                    aria-live="polite"
                    className="text-sm text-red-600"
                >
                    {state.message}
                </p>
            )}

            <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
                Create Meeting
            </button>
        </form>
    );
}