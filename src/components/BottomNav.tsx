"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, MessageSquare, Car, Home, Ticket } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/fan", label: "Map", icon: Map },
    { href: "/fan/assistant", label: "AI Chat", icon: MessageSquare },
    { href: "/fan/transport", label: "Transit", icon: Car },
    { href: "/", label: "Home", icon: Home },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-panel border-b-0 border-x-0 rounded-b-none p-2 pb-safe z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center p-2 rounded-xl transition-all ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 scale-110" 
                  : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              }`}
            >
              <Icon size={22} className="mb-0.5" />
              <span className="text-[10px] font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
