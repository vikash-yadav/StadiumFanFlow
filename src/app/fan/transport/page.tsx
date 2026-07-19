"use client";

import { Car, Train, Bus, Clock, MapPin, Zap, ChevronRight } from "lucide-react";

export default function TransportPage() {
  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto pb-24">
      <div>
        <h2 className="text-2xl font-bold">Smart Transport Hub</h2>
        <p className="text-xs text-slate-500 mt-1">AI-optimized real-time transit and parking status for MetLife Stadium.</p>
      </div>

      {/* Parking Section */}
      <div className="glass-panel p-5 space-y-4">
        <h3 className="font-bold text-base flex items-center gap-2">
          <Car className="text-blue-500" size={18} /> Parking Zones
        </h3>
        <div className="space-y-3">
          {[
            { zone: "Lot A (VIP)", spots: 12, total: 200, status: "Near Full", color: "bg-red-500" },
            { zone: "Lot B (General)", spots: 340, total: 1500, status: "Available", color: "bg-emerald-500" },
            { zone: "Lot E (Rideshare Drop)", spots: null, total: null, status: "Open", color: "bg-blue-500" },
          ].map((lot, i) => (
            <div key={i} className="p-4 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full ${lot.color} ${lot.status === "Near Full" ? "animate-pulse" : ""}`}></div>
                <div>
                  <p className="font-bold text-sm">{lot.zone}</p>
                  {lot.spots !== null && (
                    <p className="text-[10px] text-slate-500 mt-0.5">{lot.spots} / {lot.total} spots remaining</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  lot.status === "Near Full" ? "bg-red-100 text-red-700 dark:bg-red-950/20 dark:text-red-400" 
                  : lot.status === "Available" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
                  : "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
                }`}>
                  {lot.status}
                </span>
                <ChevronRight size={14} className="text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Public Transit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* NJ Transit */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="font-bold text-base flex items-center gap-2">
            <Train className="text-emerald-500" size={18} /> NJ Transit Rail
          </h3>
          <div className="space-y-3">
            {[
              { line: "Meadowlands Line → Secaucus", depart: "4 min", status: "On Time" },
              { line: "Meadowlands Line → Secaucus", depart: "19 min", status: "On Time" },
              { line: "Special Express → Penn Station", depart: "32 min", status: "Delayed +5m" },
            ].map((train, i) => (
              <div key={i} className="flex items-center justify-between p-3 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20">
                <div>
                  <p className="font-semibold text-xs">{train.line}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <Clock size={10} /> Departing in {train.depart}
                  </p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  train.status === "On Time" 
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400" 
                    : "bg-red-100 text-red-700 dark:bg-red-950/20 dark:text-red-400"
                }`}>
                  {train.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shuttle Bus */}
        <div className="glass-panel p-5 space-y-4">
          <h3 className="font-bold text-base flex items-center gap-2">
            <Bus className="text-orange-500" size={18} /> Fan Shuttle Buses
          </h3>
          <div className="space-y-3">
            {[
              { route: "Route S1 → Times Square", next: "8 min", freq: "Every 15 min" },
              { route: "Route S2 → Newark Airport", next: "22 min", freq: "Every 30 min" },
            ].map((bus, i) => (
              <div key={i} className="flex items-center justify-between p-3 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20">
                <div>
                  <p className="font-semibold text-xs">{bus.route}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{bus.freq}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <Clock size={10} /> {bus.next}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Recommendation */}
          <div className="p-3 border border-emerald-200 dark:border-emerald-900 bg-emerald-500/5 rounded-xl text-[11px] text-emerald-800 dark:text-emerald-400 flex gap-2 items-start">
            <Zap className="flex-shrink-0 mt-0.5" size={14} />
            <span><strong>AI Tip:</strong> Post-match exit rush begins in ~45 minutes. Consider pre-booking an Uber XL for gate pickup at Lot E to avoid the 20-minute surge wait.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
