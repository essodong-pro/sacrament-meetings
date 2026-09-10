import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8 md:p-12 space-y-6">
          <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
            Ward Administration Portal
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Streamline Your Sacrament Meeting Planning
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Efficiently coordinate agendas, track speakers, assign hymns, and publish programs for current and past Sundays all in one place.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/meetings"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              View All Meetings
            </Link>
            <Link
              href="/meetings/current"
              className="bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Today&apos;s Program
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-full min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
            alt="Sacrament meeting planning concept"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}