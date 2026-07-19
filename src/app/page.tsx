"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  Navigation, Car, Coffee, Accessibility, 
  Search, AlertCircle, Bus, HeartHandshake, Shield, 
  Users, UserCheck, Settings, CloudSun, Calendar, HelpCircle
} from "lucide-react";
import FloatingAI from "@/components/FloatingAI";

const HomepageMap = dynamic(() => import("@/components/HomepageMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-gray-500">
      Loading arena heatmaps...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-4 md:p-8 animate-fade-in pb-24">
      {/* Top Banner / Match Info Hero */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Stadium<span className="gradient-text">FanFlow</span>
            </h1>
            <p className="text-sm text-slate-500 font-medium">FIFA World Cup 2026 Stadium Operating System</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Link href="/fan" className="btn bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:border dark:border-blue-900 text-xs py-2 px-4 gap-2">
              <Users size={14} /> Fan Portal
            </Link>
            <Link href="/organizer" className="btn bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border dark:border-emerald-900 text-xs py-2 px-4 gap-2">
              <Shield size={14} /> Organizer Portal
            </Link>
            <Link href="/volunteer" className="btn bg-orange-100 hover:bg-orange-200 text-orange-800 dark:bg-orange-950/40 dark:text-orange-300 dark:border dark:border-orange-900 text-xs py-2 px-4 gap-2">
              <UserCheck size={14} /> Volunteer Portal
            </Link>
            <Link href="/staff" className="btn bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-950/40 dark:text-slate-300 dark:border dark:border-slate-800 text-xs py-2 px-4 gap-2">
              <Settings size={14} /> Staff Portal
            </Link>
          </div>
        </div>

        {/* Live Match Hero Section */}
        <div className="glass-panel p-6 bg-gradient-to-br from-blue-600/90 to-emerald-700/90 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="space-y-2 z-10 text-center md:text-left">
            <span className="bg-red-500 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider animate-pulse">
              ● Live Match
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mt-1">USA vs Brazil</h2>
            <p className="text-xs text-blue-100 font-medium">Halftime • MetLife Stadium, New Jersey</p>
          </div>

          <div className="flex items-center gap-6 z-10 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
            <div className="text-center">
              <p className="text-4xl font-extrabold">2</p>
              <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">USA</p>
            </div>
            <div className="text-lg font-bold text-white/50">-</div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">1</p>
              <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">BRA</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Heatmap + AI Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Heatmap Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Stadium Crowd Flow Heatmap
              </h3>
            </div>
            
            <div className="h-[450px] rounded-2xl border border-[var(--border)] overflow-hidden shadow-inner relative">
              <HomepageMap />
            </div>
          </div>

          {/* AI Insights & Notifications */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <HelpCircle className="text-blue-500" size={20} />
              AI Insights & Alerts
            </h3>
            
            <div className="space-y-4">
              
              {/* Emergency Alert Card */}
              <div className="glass-panel p-4 border-l-4 border-red-500 bg-red-500/5 flex gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-xs text-red-600 dark:text-red-400">Crowd Congestion - Gate A</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Gate A capacity at 94%. AI recommends redirecting incoming fans to Gate B (East).
                  </p>
                </div>
              </div>

              {/* Concession Queues */}
              <div className="glass-panel p-4 border-l-4 border-orange-500 bg-orange-500/5 flex gap-3">
                <Coffee className="text-orange-500 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-xs text-orange-600 dark:text-orange-400">Concession Surge Warning</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Halftime concessions surge in progress. Halal Food Court wait times now 15+ minutes.
                  </p>
                </div>
              </div>

              {/* Transit & Weather Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400">
                    <CloudSun size={18} />
                    <span className="text-[10px] font-bold uppercase">Weather</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-bold">74°F</p>
                    <p className="text-[10px] text-slate-500 font-medium">Clear Skies</p>
                  </div>
                </div>
                
                <div className="glass-panel p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400">
                    <Bus size={18} />
                    <span className="text-[10px] font-bold uppercase">Transit</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg font-bold">Metro 4m</p>
                    <p className="text-[10px] text-emerald-500 font-medium">On Schedule</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Action Grid */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            
            <Link href="/fan" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Navigation className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Navigation</span>
            </Link>

            <Link href="/fan/transport" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Car className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Parking</span>
            </Link>

            <Link href="/fan" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Coffee className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Food & Drinks</span>
            </Link>

            <Link href="/fan" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Accessibility className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Accessibility</span>
            </Link>

            <Link href="/staff/lost" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Search className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Lost & Found</span>
            </Link>

            <Link href="/staff/alerts" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-[10px] font-semibold">Emergency Help</span>
            </Link>

            <Link href="/fan/transport" className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2">
              <Bus className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Public Transit</span>
            </Link>

            <div className="glass-panel p-4 text-center hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2 cursor-pointer">
              <Calendar className="text-blue-500" size={20} />
              <span className="text-[10px] font-semibold">Match Schedule</span>
            </div>

          </div>
        </div>

      </div>

      {/* Floating AI Panel */}
      <FloatingAI />
    </main>
  );
}
