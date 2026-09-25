'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
    addMeeting,
    updateMeeting as updateMeetingDb,
    deleteMeeting as deleteMeetingDb,
} from './meetings-db';

const MeetingFormSchema = z.object({
    date: z
        .string()
        .min(1, 'Please select a meeting date.'),
    meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], {
        error: 'Please select a meeting type.',
    }),
    presiding: z
        .string()
        .trim()
        .min(1, 'Please enter the presiding person.'),
    conducting: z
        .string()
        .trim()
        .min(1, 'Please enter the conducting person.'),
    openingPrayer: z
        .string()
        .trim()
        .min(1, 'Please enter the opening prayer.'),
    closingPrayer: z
        .string()
        .trim()
        .min(1, 'Please enter the closing prayer.'),
});

export type State = {
    message?: string;
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        openingPrayer?: string[];
        closingPrayer?: string[];
    };
};

export async function createMeeting(
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = MeetingFormSchema.safeParse({
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        openingPrayer: formData.get('openingPrayer'),
        closingPrayer: formData.get('closingPrayer'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await addMeeting({
            date: validatedFields.data.date,
            meetingType: validatedFields.data.meetingType,
            presiding: validatedFields.data.presiding,
            conducting: validatedFields.data.conducting,
            announcements: [],
            openingHymn: {
                number: 0,
                title: '',
            },
            openingPrayer: validatedFields.data.openingPrayer,
            wardBusiness: [],
            stakeBusiness: false,
            sacramentHymn: {
                number: 0,
                title: '',
            },
            speakers: [],
            closingHymn: {
                number: 0,
                title: '',
            },
            closingPrayer: validatedFields.data.closingPrayer,
        });
    } catch (error) {
        console.error('Failed to create meeting:', error);

        return {
            message: 'Could not create the meeting. Please try again.',
        };
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function updateMeeting(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = MeetingFormSchema.safeParse({
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        openingPrayer: formData.get('openingPrayer'),
        closingPrayer: formData.get('closingPrayer'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const meeting = await updateMeetingDb(id, {
            date: validatedFields.data.date,
            meetingType: validatedFields.data.meetingType,
            presiding: validatedFields.data.presiding,
            conducting: validatedFields.data.conducting,
            openingPrayer: validatedFields.data.openingPrayer,
            closingPrayer: validatedFields.data.closingPrayer,
        });

        if (!meeting) {
            return {
                message: 'Meeting not found.',
            };
        }
    } catch (error) {
        console.error('Failed to update meeting:', error);

        return {
            message: 'Could not update the meeting. Please try again.',
        };
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
    try {
        const deleted = await deleteMeetingDb(id);

        if (!deleted) {
            throw new Error('Meeting not found.');
        }
    } catch (error) {
        console.error('Failed to delete meeting:', error);
        throw new Error('Could not delete the meeting. Please try again.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}