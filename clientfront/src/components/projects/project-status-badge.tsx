import type { ProjectStatus } from "@/lib/projects/types";

type ProjectStatusBadgeProps = {
    status: ProjectStatus;
};

export default function ProjectStatusBadge({
    status,
}: ProjectStatusBadgeProps) {
    const statusStyles: Record<ProjectStatus, string> = {
        Planning: "bg-blue-100 text-blue-700",
        "In Progress": "bg-yellow-100 text-yellow-700",
        Completed: "bg-green-100 text-green-700",
        "On Hold": "bg-gray-100 text-gray-700",
    };

    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
}
