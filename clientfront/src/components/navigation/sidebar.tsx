import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-full border-b border-slate-200 bg-white p-5 md:min-h-screen md:w-60 md:border-b-0 md:border-r">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                ClientFlow<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-2 text-sm text-slate-500">Workspace</p>

            <nav className="mt-6 flex gap-2 md:flex-col">
                <Link
                    href="/"
                    className="rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700"
                >
                    Dashboard
                </Link>

                <Link
                    href="/projects"
                    className="rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"
                >
                    Projects
                </Link>

                <Link
                    href="/clients"
                    className="rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"
                >
                    Clients
                </Link>
            </nav>

            <div className="mt-8 hidden rounded-xl bg-slate-50 p-4 md:block">
                <p className="text-sm font-semibold text-slate-800">
                    Your workspace
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                    Keep your projects, clients, and deadlines organized in one
                    place.
                </p>
            </div>
        </aside>
    );
}
