import { CheckSquare, AlertCircle, Compass, HelpCircle } from "lucide-react";

export default function VolunteerPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Volunteer Tasks</h2>
        <p className="text-gray-500 mt-1">Assigned duties and visitor assistance triggers.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-5 border-l-4 border-[var(--primary)]">
          <h3 className="font-semibold text-xs text-gray-500 uppercase tracking-wider">Assigned Sector</h3>
          <p className="text-2xl font-bold mt-2">Sector 112 (Concourse North)</p>
          <p className="text-xs text-gray-500 mt-1">Shift ends in 2 hrs 15 mins</p>
        </div>
        <div className="glass-panel p-5 border-l-4 border-emerald-500">
          <h3 className="font-semibold text-xs text-gray-500 uppercase tracking-wider">Help Requests Answered</h3>
          <p className="text-2xl font-bold mt-2">14 Fans Assisted</p>
          <p className="text-xs text-emerald-500 mt-1">✓ Top volunteer badge unlocked</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Duty Checklist */}
        <div className="lg:col-span-2 glass-panel p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <CheckSquare className="text-[var(--primary)]" size={20} /> My Shift Checklist
          </h3>
          <div className="space-y-3">
            {[
              { text: "Verify wheelchair accessibility ramp 3 is clear of obstructions", checked: true },
              { text: "Distribute World Cup schedule brochures to Info Kiosk A", checked: false },
              { text: "Assist lost family at Section 112 Seat Map coordinates", checked: false },
              { text: "Conduct post-match spectator guidance briefing", checked: false },
            ].map((task, i) => (
              <label key={i} className="flex items-start gap-3 p-3 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20 cursor-pointer hover:bg-white/80 dark:hover:bg-black/40 transition-colors">
                <input type="checkbox" defaultChecked={task.checked} className="mt-1 rounded border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)]" />
                <span className={`text-xs ${task.checked ? "line-through text-slate-400" : "text-slate-700 dark:text-slate-300"}`}>{task.text}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Live Broadcast / Operations alert */}
        <div className="glass-panel p-6 space-y-4 border border-red-200 dark:border-red-950 bg-red-500/5">
          <h3 className="font-bold text-lg text-red-600 dark:text-red-400 flex items-center gap-2">
            <AlertCircle size={20} /> System Alerts
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-white/80 dark:bg-zinc-900/80 rounded-xl border border-red-100 dark:border-red-900/50">
              <p className="text-xs font-bold text-red-600">Crowd Alert - Gate A</p>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                Congestion surge. Volunteers near Sector 110-120 please direct exiting fans toward Gate B (East).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
