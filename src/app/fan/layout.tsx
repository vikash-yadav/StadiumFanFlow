import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function FanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] pb-20">
      <header className="sticky top-0 z-40 glass-panel border-t-0 border-x-0 rounded-t-none px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-extrabold tracking-tight">
            Stadium<span className="gradient-text">FanFlow</span>
          </h1>
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Fan Portal</span>
      </header>
      
      <main className="animate-fade-in">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
