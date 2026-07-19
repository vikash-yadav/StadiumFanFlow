import { Search, Plus, MapPin } from "lucide-react";

export default function LostAndFoundPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Lost & Found Assistance</h2>
          <p className="text-gray-500 mt-1">AI-powered item matching system for stadium attendees.</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Plus size={16} /> Report Found Item
        </button>
      </div>

      {/* Search Filter */}
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Search by keywords (e.g. 'black leather wallet', 'iphone 14')..." 
          className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
        <button className="btn btn-primary px-6 shadow-md">
          Search Items
        </button>
      </div>

      <div className="glass-panel p-6">
        <h3 className="font-bold text-lg mb-4">Recent Reports</h3>
        <div className="divide-y divide-[var(--border)]">
          {[
            { item: "Black Leather Wallet", location: "Sector 112 Restroom", time: "10 mins ago", status: "Matching Pending" },
            { item: "iPhone 13 (Blue Case)", location: "Concession Stand C", time: "1 hour ago", status: "Claimed" },
            { item: "Car Keys (Toyota)", location: "Gate A Entry", time: "3 hours ago", status: "Unclaimed" },
          ].map((r, i) => (
            <div key={i} className="py-4 flex justify-between items-center first:pt-0 last:pb-0">
              <div>
                <p className="font-semibold text-sm">{r.item}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={12} /> {r.location} • Reported {r.time}
                </p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                r.status === "Claimed" 
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                  : r.status === "Unclaimed" 
                    ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              }`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
