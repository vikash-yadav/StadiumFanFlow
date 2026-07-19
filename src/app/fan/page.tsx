"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { 
  Navigation2, Coffee, AlertCircle, Accessibility, 
  Wallet, Eye, Sparkles, Clock, MapPin, Ticket 
} from "lucide-react";

const StadiumMap = dynamic(() => import("@/components/StadiumMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-gray-500">
      Loading interactive map...
    </div>
  ),
});

export default function FanPortal() {
  const [filter, setFilter] = useState("all");
  const [ticketModal, setTicketModal] = useState(false);

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto pb-24">
      {/* Welcome Banner */}
      <div className="flex justify-between items-center bg-gradient-to-br from-blue-600 to-emerald-600 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
        <div className="z-10">
          <h2 className="text-2xl font-bold">Welcome back, Fan!</h2>
          <p className="text-xs text-blue-100 mt-1">MetLife Stadium • Sector 112, Row 12, Seat 4</p>
        </div>
        <button 
          onClick={() => setTicketModal(true)}
          className="btn bg-white text-blue-700 hover:bg-slate-100 flex items-center gap-2 text-xs py-2 px-4 shadow-md font-semibold z-10"
        >
          <Ticket size={16} /> View Ticket
        </button>
        <div className="absolute right-0 top-0 opacity-10 translate-x-4 -translate-y-4">
          <Wallet size={120} />
        </div>
      </div>

      {/* Primary Section: Interactive Map */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Smart Stadium Navigation</h3>
          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 text-[10px] font-bold rounded-full">
            🟢 Quickest Routes Active
          </span>
        </div>

        {/* Map filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollable-hide">
          <button 
            onClick={() => setFilter("all")}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
              filter === "all" 
                ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900" 
                : "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
            }`}
          >
            Show All
          </button>
          <button 
            onClick={() => setFilter("food")}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
              filter === "food" 
                ? "bg-purple-600 text-white border-purple-600" 
                : "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400"
            }`}
          >
            <Coffee size={14} /> Food & Drink
          </button>
          <button 
            onClick={() => setFilter("accessible")}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
              filter === "accessible" 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
            }`}
          >
            <Accessibility size={14} /> Accessible Paths
          </button>
        </div>

        {/* Real Interactive Map */}
        <div className="relative w-full h-[40vh] bg-slate-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-[var(--border)]">
          <StadiumMap filter={filter} />
        </div>
      </div>

      {/* Grid: Food Ordering & Queue Prediction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Concession Food Queue */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="font-bold text-base flex items-center gap-2">
            <Coffee className="text-purple-500" size={18} /> Food & Beverages
          </h3>
          <div className="space-y-3">
            {[
              { name: "Halal Cart Express", item: "Chicken Gyro Platter", wait: "8 mins", status: "Optimal" },
              { name: "Eco Cup Smoothies", item: "Berry Protein Shake", wait: "18 mins", status: "Heavy Concourse" },
            ].map((vendor, i) => (
              <div key={i} className="p-3 border border-[var(--border)] rounded-xl flex items-center justify-between bg-white/40 dark:bg-black/20">
                <div>
                  <p className="font-bold text-xs">{vendor.name}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{vendor.item}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xs flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <Clock size={12} className="text-slate-400" /> {vendor.wait}
                  </p>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                    vendor.status === "Optimal" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>{vendor.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Queue Predictions */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="font-bold text-base flex items-center gap-2">
            <Sparkles className="text-emerald-500" size={18} /> AI Queue Predictions
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Halftime Concessions Surge</span>
                <span className="font-bold text-orange-500">Starts in 5 mins</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[85%] rounded-full"></div>
              </div>
            </div>
            
            <div className="p-3 border border-emerald-100 dark:border-emerald-900 bg-emerald-500/5 rounded-xl text-[11px] text-emerald-800 dark:text-emerald-400">
              <strong>AI Recommendation:</strong> Head to Concourse C restrooms now; wait times are currently less than 2 minutes. Wait times are expected to rise to 12 minutes in the next 10 minutes.
            </div>
          </div>
        </div>

      </div>

      {/* Ticket Wallet Modal */}
      {ticketModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-panel max-w-sm w-full bg-white dark:bg-zinc-950 p-6 space-y-6 relative animate-fade-in border border-white/20">
            <div className="text-center">
              <h3 className="font-bold text-lg">My World Cup Ticket</h3>
              <p className="text-xs text-gray-500 mt-1">FIFA World Cup 2026 - Match 24</p>
            </div>

            {/* Fake Barcode Ticket Graphic */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 rounded-2xl text-white text-center space-y-4 shadow-inner">
              <p className="text-xs uppercase tracking-widest text-blue-200">Admit One</p>
              <p className="text-2xl font-black">SECTOR 112</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-blue-200 font-medium">Row</p>
                  <p className="font-bold text-sm">12</p>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">Seat</p>
                  <p className="font-bold text-sm">4</p>
                </div>
              </div>

              {/* Mock Barcode */}
              <div className="bg-white p-3 rounded-lg mx-auto w-40 flex flex-col justify-center items-center">
                 <div className="h-8 w-full bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_6px)]"></div>
                 <span className="text-[8px] text-gray-500 tracking-widest mt-1">WM-9284-01-26</span>
              </div>
            </div>

            <button 
              onClick={() => setTicketModal(false)}
              className="btn btn-primary w-full text-xs"
            >
              Close Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
