import type { Project } from "@/lib/projects/types";
import ProjectStatusBadge from "@/components/projects/project-status-badge";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {project.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {project.client}
                    </p>
                </div>

                <ProjectStatusBadge status={project.status} />
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-500">Due date</p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                    {project.dueDate}
                </p>
            </div>
        </article>
    );
}
