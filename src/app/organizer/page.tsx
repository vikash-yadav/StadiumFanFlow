import { Shield, Brain, Users, TrendingUp, AlertTriangle, HelpCircle } from "lucide-react";

export default function OrganizerDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Organizer Control Center</h2>
          <p className="text-gray-500 mt-1">Global operations, predictive logistics, and sustainability tracking.</p>
        </div>
        <button className="btn btn-primary gap-2 text-xs py-2 px-4">
          <Shield size={14} /> Export Operations Log
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Gate Ingress", value: "68,432 / 72,000", pct: "95% Capacity", desc: "Halftime stadium load", change: "🟢 Stable Flow" },
          { label: "Active Volunteers", value: "148 On Duty", pct: "12 Stands Staffed", desc: "98% coverage rate", change: "🟢 Optimal" },
          { label: "Waste Diversion Rate", value: "64%", pct: "Goal: 70%", desc: "Compostable separation active", change: "⚡ Action Required" },
          { label: "Power Usage Efficiency", value: "0.86 PUE", pct: "12% Power Saved", desc: "AI smart lighting active", change: "🟢 Eco Mode" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-5 space-y-1 border-t-4 border-[var(--primary)] first:border-[var(--primary)] odd:border-emerald-500">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
            <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
            <div className="flex justify-between items-center text-xs mt-2 pt-2 border-t border-[var(--border)]">
              <span className="text-slate-500">{stat.pct}</span>
              <span className="font-semibold text-[10px]">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Decisions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Crowd Ingress Analytics */}
        <div className="lg:col-span-2 glass-panel p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Users className="text-[var(--primary)]" size={20} /> Spectator Flow Rate (Ingress)
            </h3>
            <span className="text-xs text-slate-400">Updates every 30s</span>
          </div>

          {/* Simple CSS-based bar chart representing spectator gate entry flow */}
          <div className="h-64 flex items-end justify-between gap-2 pt-6">
            {[
              { label: "Gate A (North)", val: 94, color: "bg-red-500" },
              { label: "Gate B (East)", val: 42, color: "bg-emerald-500" },
              { label: "Gate C (South)", val: 68, color: "bg-orange-500" },
              { label: "Gate D (West)", val: 31, color: "bg-emerald-500" },
              { label: "Express VIP", val: 15, color: "bg-emerald-500" },
            ].map((gate, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{gate.val}%</span>
                <div 
                  className={`w-full rounded-t-lg transition-all duration-500 ${gate.color}`} 
                  style={{ height: `${gate.val}%` }}
                ></div>
                <span className="text-[10px] text-slate-500 text-center font-semibold mt-1 max-w-[70px] truncate">
                  {gate.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: AI Decision & Incidents */}
        <div className="space-y-6">
          
          {/* AI Decision Support */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <Brain size={18} /> AI Logistic Suggestions
            </h3>
            
            <div className="p-4 rounded-xl border border-purple-100 dark:border-purple-900 bg-purple-500/5 space-y-3">
              <p className="text-xs font-bold text-purple-700 dark:text-purple-300">Staff Relocation Prompt</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Gemini predicts an ingress bottleneck at Gate C in 15 minutes. Suggest shifting 6 volunteers from VIP lounges to Gate C entry desks.
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary text-[10px] py-1 px-3">Approve Shift</button>
                <button className="btn bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-[10px] py-1 px-3">Decline</button>
              </div>
            </div>
          </div>

          {/* Active Incidents Coordinator */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertTriangle size={18} /> Active Incidents
            </h3>
            
            <div className="space-y-3 divide-y divide-[var(--border)]">
              {[
                { name: "Medical dispatch requested", loc: "Section 112", status: "Staff Responding", time: "2 mins ago" },
                { name: "Recycling bin overflow", loc: "Sector 4 Food Court", status: "Queue Dispatched", time: "8 mins ago" },
              ].map((inc, i) => (
                <div key={i} className="pt-3 first:pt-0 flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs font-bold">{inc.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{inc.loc} • {inc.time}</p>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800 dark:bg-orange-950/20 dark:text-orange-400">
                    {inc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
