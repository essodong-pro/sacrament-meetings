export default function Header() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="bg-blue-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Sacrament Meeting Planner</h1>
                    <p className="text-blue-200 text-sm mt-1">Riverdale Ward • Stake Management Portal</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                    <span className="text-xs uppercase tracking-wider bg-blue-800 px-3 py-1 rounded-full text-blue-100">
                        {currentDate}
                    </span>
                </div>
            </div>
        </header>
    );
}