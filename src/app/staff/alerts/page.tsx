import { AlertTriangle, ShieldAlert, BellRing } from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Emergency & Alerts</h2>
          <p className="text-gray-500 mt-1">Broadcast notifications to fans and staff during incidents.</p>
        </div>
        <button className="btn bg-red-600 text-white hover:bg-red-700 font-semibold gap-2">
          <ShieldAlert size={16} /> Trigger Stadium Evacuation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <BellRing size={20} className="text-[var(--primary)]" /> Broadcast New Alert
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Target Audience</label>
              <select className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-sm">
                <option>All Users (Fans + Staff)</option>
                <option>Fans Only</option>
                <option>Staff & Volunteers Only</option>
                <option>Sector 100-120 Only</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Alert Message</label>
              <textarea 
                rows={3} 
                placeholder="Enter emergency message..." 
                className="w-full p-2.5 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              ></textarea>
            </div>
            <button className="btn btn-primary w-full">Send Broadcast</button>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="font-bold text-lg mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
            <AlertTriangle size={20} /> Active Alerts
          </h3>
          <div className="space-y-3">
            <div className="p-4 border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-950/20 rounded-xl">
              <span className="text-[10px] font-bold uppercase bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-0.5 rounded">
                Weather Advisory
              </span>
              <p className="text-sm font-semibold mt-2">Heat warning: Drink plenty of water</p>
              <p className="text-xs text-gray-500 mt-1">Sent to: All Users • 24 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
