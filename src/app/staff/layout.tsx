import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex">
      <Sidebar role="staff" />
      
      {/* Mobile Top Nav */}
      <div className="md:hidden fixed top-0 w-full glass-panel border-t-0 border-x-0 rounded-none p-4 pb-2 z-40 space-y-2">
         <h1 className="text-lg font-bold">Staff Portal</h1>
         <nav className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide text-xs font-semibold">
           <Link href="/staff" className="text-gray-500 hover:text-[var(--foreground)]">Map</Link>
           <Link href="/staff/crowd" className="text-gray-500 hover:text-[var(--foreground)]">Crowd</Link>
           <Link href="/staff/alerts" className="text-gray-500 hover:text-[var(--foreground)]">Alerts</Link>
           <Link href="/staff/lost" className="text-gray-500 hover:text-[var(--foreground)]">Lost/Found</Link>
           <Link href="/" className="text-red-500">Exit</Link>
         </nav>
      </div>

      <main className="flex-1 md:ml-64 p-6 pt-28 md:pt-6 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
