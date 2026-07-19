import { Users, MapPin, CheckCircle, Clock } from "lucide-react";

export default function VisitorAssistancePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Visitor Assistance Requests</h2>
        <p className="text-gray-500 mt-1">Real-time help signals dispatched from fans inside your sector.</p>
      </div>

      <div className="glass-panel p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="text-[var(--primary)]" size={20} /> Active Help Signals
        </h3>

        <div className="space-y-4">
          {[
            { id: 1, name: "Wheelchair Escort Needed", location: "Sector 112, Row 4", time: "2 mins ago", urgency: "High" },
            { id: 2, name: "Lost Ticket Assistance", location: "Info Desk C", time: "8 mins ago", urgency: "Medium" },
            { id: 3, name: "Translation Help (Portuguese)", location: "Concession Stand 2", time: "15 mins ago", urgency: "Low" },
          ].map((req) => (
            <div key={req.id} className="p-4 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    req.urgency === "High" ? "bg-red-500 animate-pulse" : req.urgency === "Medium" ? "bg-orange-500" : "bg-blue-500"
                  }`}></span>
                  <p className="font-bold text-sm">{req.name}</p>
                </div>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin size={12} /> {req.location} • <Clock size={12} /> {req.time}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-primary text-xs py-1.5 px-4 shadow-sm">
                  Accept & Route
                </button>
                <button className="btn bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs py-1.5 px-4">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
