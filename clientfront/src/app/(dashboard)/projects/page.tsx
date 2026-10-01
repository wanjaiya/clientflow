import Link from "next/link";

const projectNames = [
    "Website redesign",
    "Brand identity",
    "Mobile app landing page",
];

export default function ProjectsPage() {
    return (
        <div className="mx-auto ">
            <Link
                href="/"
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
                ← Back to dashboard
            </Link>

            <p className="text-sm text-slate-500 mt-2">ClientFlow / Projects</p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900">Projects</h1>

            <p className="mt-2 text-slate-600">
                Manage your client work in one place.
            </p>

            <div className="mt-8 space-y-3">
                {projectNames.map((name) => (
                    <div
                        key={name}
                        className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                        <h2 className="font-semibold text-slate-800">{name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
