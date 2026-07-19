import Link from "next/link";
import { Users, AlertTriangle, Shield, Search, Home, Map } from "lucide-react";

export default function Sidebar({ role }: { role: "staff" | "organizer" | "volunteer" }) {
  const staffLinks = [
    { href: "/staff", label: "Operations Map", icon: Map },
    { href: "/staff/crowd", label: "Crowd Density", icon: Users },
    { href: "/staff/alerts", label: "Emergency Alerts", icon: AlertTriangle },
    { href: "/staff/lost", label: "Lost & Found", icon: Search },
  ];

  const organizerLinks = [
    { href: "/organizer", label: "Insights Dashboard", icon: Shield },
    { href: "/organizer/sustainability", label: "Sustainability", icon: Home },
  ];

  const volunteerLinks = [
    { href: "/volunteer", label: "My Tasks", icon: Shield },
    { href: "/volunteer/assistance", label: "Visitor Help", icon: Users },
  ];

  let links = staffLinks;
  if (role === "organizer") links = organizerLinks;
  if (role === "volunteer") links = volunteerLinks;

  return (
    <aside className="w-64 h-screen glass-panel rounded-none border-t-0 border-l-0 border-b-0 hidden md:flex flex-col p-4 z-40 fixed top-0 left-0">
      <div className="mb-8 pl-2">
        <h1 className="text-xl font-bold gradient-text">StadiumFanFlow</h1>
        <p className="text-xs text-gray-500 capitalize">{role} Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Icon size={18} className="text-[var(--primary)]" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-red-50 text-red-600 dark:hover:bg-red-900/30"
        >
          Exit Portal
        </Link>
      </div>
    </aside>
  );
}
