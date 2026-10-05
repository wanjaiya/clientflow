import { projects } from "@/lib/projects/data";
import ProjectStatusBadge from "@/components/projects/project-status-badge";

function SummaryCard({
    title,
    value,
    description,
}: {
    title: string;
    value: string;
    description: string;
}) {
    return (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{title}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
            <p className="mt-2 text-xs text-slate-500">{description}</p>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-slate-500">
                        Thursday, October 1, 2026
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight">
                        My Workspace
                    </h2>
                    <p className="mt-2 text-slate-500">
                        Here&apos;s what&apos;s happening with your projects.
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                    + New project
                </button>
            </header>

            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <SummaryCard
                    title="Total projects"
                    value="13"
                    description="Across all your clients"
                />
                <SummaryCard
                    title="Active projects"
                    value="5"
                    description="Currently being worked on"
                />
                <SummaryCard
                    title="Completed projects"
                    value="7"
                    description="Successfully delivered"
                />
            </section>

            <section
                id="projects"
                className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
                <div className="border-b border-slate-200 p-5 sm:p-6">
                    <h3 className="text-lg font-semibold">Recent projects</h3>
                    <p className="mt-1 text-sm text-slate-500">
                        A snapshot of your latest client work.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">
                                    Project
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Status
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Due date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="px-6 py-5">
                                        <p className="font-semibold text-slate-800">
                                            {project.name}
                                        </p>
                                        <p className="mt-1 text-slate-500">
                                            {project.client}
                                        </p>
                                    </td>

                                    <td className="px-6 py-5">
                                        <ProjectStatusBadge
                                            status={project.status}
                                        />
                                    </td>

                                    <td className="px-6 py-5 text-slate-600">
                                        {project.dueDate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer className="mt-8 text-center text-xs text-slate-400">
                ClientFlow · Built for better client relationships.
            </footer>
        </>
    );
}
