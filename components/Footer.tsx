export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Sacrament Meeting Planner. Built with Next.js & Tailwind CSS.</p>
            </div>
        </footer>
    );
}