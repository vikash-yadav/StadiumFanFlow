import { Settings, ClipboardList, CheckCircle, Flame, ShieldAlert, Cpu } from "lucide-react";

export default function StaffPortal() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Venue Staff Panel</h2>
          <p className="text-gray-500 mt-1">Equipment maintenance, cleaning schedules, and facilities monitoring.</p>
        </div>
        <button className="btn btn-primary gap-2 text-xs py-2 px-4">
          <Settings size={14} /> Systems Override
        </button>
      </div>

      {/* Stats KPI Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-5 border-l-4 border-blue-500">
          <h3 className="font-semibold text-xs text-slate-400 uppercase tracking-wider">HVAC & Power Load</h3>
          <p className="text-2xl font-bold mt-1">82% Optimal Load</p>
          <p className="text-xs text-emerald-500 mt-1">● 14 cooling units active</p>
        </div>
        <div className="glass-panel p-5 border-l-4 border-emerald-500">
          <h3 className="font-semibold text-xs text-slate-400 uppercase tracking-wider">Cleaning Tickets Resolved</h3>
          <p className="text-2xl font-bold mt-1">45 / 48 Completed</p>
          <p className="text-xs text-slate-500 mt-1">Next inspection: 10 mins</p>
        </div>
        <div className="glass-panel p-5 border-l-4 border-red-500">
          <h3 className="font-semibold text-xs text-slate-400 uppercase tracking-wider">Active Hardware Faults</h3>
          <p className="text-2xl font-bold mt-1">1 Critical Alarm</p>
          <p className="text-xs text-red-500 mt-1">🚨 Elevator 3 (West Concourse) offline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Maintenance Log */}
        <div className="lg:col-span-2 glass-panel p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <ClipboardList className="text-[var(--primary)]" size={20} /> Facilities Maintenance Queue
          </h3>
          
          <div className="space-y-3">
            {[
              { id: "M-482", title: "Elevator 3 Motor Calibrations", sector: "West Suite Access", status: "Critical Alarm", action: "Dispatch Crew" },
              { id: "M-483", title: "Floodlight Unit 12 Re-routing", sector: "Upper Bowl Ring E", status: "Scheduled", action: "Deploy" },
              { id: "M-484", title: "Gate C Turnstile 4 Software Reset", sector: "South Ingress", status: "In Progress", action: "View Status" },
            ].map((ticket) => (
              <div key={ticket.id} className="p-4 border border-[var(--border)] rounded-xl bg-white/40 dark:bg-black/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{ticket.id}</span>
                    <p className="font-bold text-sm">{ticket.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{ticket.sector}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    ticket.status === "Critical Alarm" 
                      ? "bg-red-100 text-red-700 dark:bg-red-950/20 dark:text-red-400 animate-pulse" 
                      : ticket.status === "In Progress"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  }`}>{ticket.status}</span>
                  <button className="btn btn-primary text-[10px] py-1.5 px-3">
                    {ticket.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleaning & Hardware Operations */}
        <div className="space-y-6">
          
          {/* Cleaning Schedules */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={18} /> Zone Inspections
            </h3>
            <div className="space-y-3">
              {[
                { zone: "Food Court North", status: "Inspected", color: "text-emerald-500" },
                { zone: "Restrooms Sec 112", status: "Inspection Due", color: "text-red-500 font-bold" },
                { zone: "Gate B Ingress", status: "Inspected", color: "text-emerald-500" },
              ].map((c, i) => (
                <div key={i} className="flex justify-between text-xs py-2 border-b border-[var(--border)] last:border-0">
                  <span className="font-medium">{c.zone}</span>
                  <span className={c.color}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Hardware Alerts */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <Cpu size={18} /> AI Predictive Alarms
            </h3>
            
            <div className="p-4 rounded-xl border border-purple-100 dark:border-purple-900 bg-purple-500/5 space-y-2">
              <h4 className="font-bold text-xs text-purple-700 dark:text-purple-300">Turnstile 4 Failure Est.</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Sensor logs indicate a high mechanical friction coefficient in Gate C Turnstile 4. AI estimates 85% probability of failure within 2 hours of post-match exit load.
              </p>
              <p className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold cursor-pointer hover:underline">
                Create Preventive Work Order ➔
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
