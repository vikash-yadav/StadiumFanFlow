import { Leaf, Award, Recycle } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Sustainability Optimization</h2>
        <p className="text-gray-500 mt-1">AI suggestions to optimize stadium resources and minimize carbon footprints.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2 text-green-600 dark:text-green-400">
            <Recycle size={20} /> Waste Management AI
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            AI predicts compostable food containers will increase waste levels by 40% in Gate B food court areas. Recommend scheduling an extra pickup crew at halftime.
          </p>
          <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center text-sm">
            <span>Proposed Recycling Target</span>
            <span className="font-bold text-green-600">70% Diversion</span>
          </div>
        </div>

        <div className="glass-panel p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Award size={20} /> Water & Power Offsets
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Smart sensors detected a cooling system overload in the West Suite area. System automatically recalibrated to save 400kWh of power.
          </p>
          <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center text-sm">
            <span>Today's Savings</span>
            <span className="font-bold text-blue-600">1.2 MWh ($240 Saved)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
