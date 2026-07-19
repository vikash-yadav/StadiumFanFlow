import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function OrganizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex">
      <Sidebar role="organizer" />
      
      {/* Mobile Top Nav */}
      <div className="md:hidden fixed top-0 w-full glass-panel border-t-0 border-x-0 rounded-none p-4 pb-2 z-40 space-y-2">
         <h1 className="text-lg font-bold">Organizer Portal</h1>
         <nav className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide text-xs font-semibold">
           <Link href="/organizer" className="text-gray-500 hover:text-[var(--foreground)]">Insights</Link>
           <Link href="/organizer/sustainability" className="text-gray-500 hover:text-[var(--foreground)]">Sustainability</Link>
           <Link href="/" className="text-red-500">Exit</Link>
         </nav>
      </div>

      <main className="flex-1 md:ml-64 p-6 pt-28 md:pt-6 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
