"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet icon issue by using custom HTML DivIcons with Lucide SVG content
const createDivIcon = (color: string) => {
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
    className: "custom-div-icon",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

const METLIFE_COORDS: [number, number] = [40.8135, -74.0744];

interface Point {
  name: string;
  coords: [number, number];
  type: "food" | "accessible" | "firstaid" | "seat";
  desc: string;
}

const STADIUM_POINTS: Point[] = [
  { name: "Gate A (North Entrance)", coords: [40.8145, -74.0744], type: "accessible", desc: "Wheelchair accessible ramp and express entry." },
  { name: "Section 112 Seat Map", coords: [40.8130, -74.0755], type: "seat", desc: "Your ticket seat location. Row 12, Seat 4." },
  { name: "First Aid Station 3", coords: [40.8135, -74.0730], type: "firstaid", desc: "Emergency medical staff on duty. Near section 140." },
  { name: "Halal & Vegan Concessions", coords: [40.8125, -74.0740], type: "food", desc: "Eco-friendly options and World Cup special snacks." },
  { name: "Gate B (East Entrance)", coords: [40.8135, -74.0760], type: "accessible", desc: "Accessible entry with shuttle bus drop-off point." },
];

// Helper component to center map on new selections
function MapRecenter({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 17);
  }, [coords, map]);
  return null;
}

export default function StadiumMap({ filter }: { filter: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-sm text-gray-500">
        Loading interactive map...
      </div>
    );
  }

  const filteredPoints = STADIUM_POINTS.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  const getMarkerColor = (type: string) => {
    switch (type) {
      case "food": return "#a855f7"; // purple
      case "accessible": return "#3b82f6"; // blue
      case "firstaid": return "#ef4444"; // red
      default: return "#10b981"; // green
    }
  };

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
      <MapContainer 
        center={METLIFE_COORDS} 
        zoom={17} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        
        {/* Recenter helper */}
        <MapRecenter coords={METLIFE_COORDS} />

        {/* User location beacon */}
        <Marker position={METLIFE_COORDS} icon={createDivIcon("#3b82f6")}>
          <Popup>
            <div className="text-xs">
              <strong className="text-[var(--primary)]">Your Location</strong>
              <p className="mt-1">Near Section 112</p>
            </div>
          </Popup>
        </Marker>

        {/* Stadium Markers */}
        {filteredPoints.map((point, index) => (
          <Marker 
            key={index} 
            position={point.coords} 
            icon={createDivIcon(getMarkerColor(point.type))}
          >
            <Popup>
              <div className="text-xs max-w-[180px]">
                <strong className="font-semibold text-sm block mb-1 text-slate-800 dark:text-slate-100">
                  {point.name}
                </strong>
                <p className="text-slate-500">{point.desc}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] uppercase font-bold text-white" style={{ backgroundColor: getMarkerColor(point.type) }}>
                  {point.type}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
