import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
        speakers: [
            { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
            { name: 'Youth Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
        announcements: ['Ward temple night: May 10']
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Bishop Smith',
        openingHymn: { number: 70, title: 'Sing We Now at Parting' },
        openingPrayer: 'Brother Johnson',
        wardBusiness: [{ description: 'Release of Elder Miller as Sunday School teacher' }],
        stakeBusiness: false,
        sacramentHymn: { number: 185, title: 'Reverently and Meekly Now' },
        speakers: [
            { name: 'Open Testimony Meeting', topic: 'Fast and Testimony', type: 'speaker' }
        ],
        closingHymn: { number: 152, title: 'God Be With You Till We Meet Again' },
        closingPrayer: 'Sister Garcia',
        announcements: ['Mother’s Day brunch after meetings']
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'regular',
        presiding: 'President Taylor',
        conducting: 'Brother Jones',
        openingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
        openingPrayer: 'Brother Martinez',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Brother Clark', topic: 'Personal Revelation', type: 'speaker' },
            { name: 'Sister White', topic: 'The Power of Scriptures', type: 'speaker' }
        ],
        closingHymn: { number: 292, title: 'O Lord, My Redeemer' },
        closingPrayer: 'Sister Adams',
        announcements: ['Youth camp orientation on Thursday at 7 PM']
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Anderson',
        openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
        openingPrayer: 'Sister Lee',
        wardBusiness: [{ description: 'Ward service project next Saturday' }],
        stakeBusiness: false,
        sacramentHymn: { number: 178, title: 'O Home Beloved' },
        speakers: [
            { name: 'Brother Wilson', topic: 'Service in the Community', type: 'speaker' },
            { name: 'Primary Children', topic: 'Children’s Song Selection', type: 'musical-number' }
        ],
        closingHymn: { number: 249, title: 'Called to Serve' },
        closingPrayer: 'Brother Thomas',
        announcements: ['Bring gloves and tools for the service project']
    },
    {
        id: 5,
        date: '2026-05-31',
        meetingType: 'stake',
        presiding: 'Stake President Young',
        conducting: 'President Young',
        openingHymn: { number: 13, title: 'An Angel from on High' },
        openingPrayer: 'Brother Harris',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
        speakers: [
            { name: 'Stake High Councilor', topic: 'Covenant Keeping', type: 'speaker' },
            { name: 'Stake President Young', topic: 'Following Church Leaders', type: 'speaker' }
        ],
        closingHymn: { number: 66, title: 'Abide With Me; ' },
        closingPrayer: 'Sister Robinson',
        announcements: ['Next week regular sacrament meeting resumes in local chapel']
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}