import { Users, TrendingUp, AlertCircle } from "lucide-react";

export default function CrowdDensityPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Crowd Density Tracking</h2>
        <p className="text-gray-500 mt-1">AI-powered bottleneck predictions and real-time sensor data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-5 border-l-4 border-red-500">
          <h3 className="font-semibold text-sm text-gray-500">Highest Congestion</h3>
          <p className="text-3xl font-bold mt-2 text-red-600">Gate A (North)</p>
          <p className="text-xs text-gray-500 mt-1">94% capacity limit reached</p>
        </div>
        <div className="glass-panel p-5 border-l-4 border-orange-500">
          <h3 className="font-semibold text-sm text-gray-500">Halftime Estimate</h3>
          <p className="text-3xl font-bold mt-2 text-orange-600">+35% Surge</p>
          <p className="text-xs text-gray-500 mt-1">Expected at Food Court South</p>
        </div>
        <div className="glass-panel p-5 border-l-4 border-green-500">
          <h3 className="font-semibold text-sm text-gray-500">Average Transit Time</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">4.2 mins</p>
          <p className="text-xs text-gray-500 mt-1">Within optimal stadium targets</p>
        </div>
      </div>

      <div className="glass-panel p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="text-[var(--primary)]" /> Sector Breakdown
        </h3>
        <div className="space-y-4">
          {[
            { name: "Sector 100-120 (Lower Bowl)", flow: "Heavy", pct: 88, color: "bg-red-500" },
            { name: "Sector 200-240 (Club Level)", flow: "Moderate", pct: 54, color: "bg-orange-500" },
            { name: "Sector 300-350 (Upper Bowl)", flow: "Light", pct: 31, color: "bg-green-500" },
          ].map((sector, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{sector.name} ({sector.flow})</span>
                <span className="font-bold">{sector.pct}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full ${sector.color} rounded-full`} style={{ width: `${sector.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
