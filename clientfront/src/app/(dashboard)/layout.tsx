import Sidebar from "@/components/navigation/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
            <Sidebar />

            <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">
                {children}
            </main>
        </div>
    );
}
