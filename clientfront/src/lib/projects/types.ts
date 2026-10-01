export type ProjectStatus =
    "Planning" | "In Progress" | "Completed" | "On Hold";

export type Project = {
    id: number;
    name: string;
    client: string;
    status: ProjectStatus;
    dueDate: string;
};
