"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const METLIFE_COORDS: [number, number] = [40.8135, -74.0744];

const createDivIcon = (color: string) => {
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
    className: "custom-div-icon",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

export default function HomepageMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm text-gray-500">
        Loading live arena heatmap...
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
      <MapContainer 
        center={METLIFE_COORDS} 
        zoom={17} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Live Heatmap Hotspots (Simulating heavy fan concentrations) */}
        {/* Gate A: Extreme congestion */}
        <Circle 
          center={[40.8145, -74.0744]} 
          radius={50} 
          pathOptions={{ fillColor: "red", color: "red", fillOpacity: 0.35, weight: 1 }} 
        />
        <Circle 
          center={[40.8145, -74.0744]} 
          radius={30} 
          pathOptions={{ fillColor: "darkred", color: "darkred", fillOpacity: 0.5, weight: 0 }} 
        />

        {/* Concourse South: Moderate-heavy */}
        <Circle 
          center={[40.8125, -74.0740]} 
          radius={45} 
          pathOptions={{ fillColor: "orange", color: "orange", fillOpacity: 0.3, weight: 1 }} 
        />
        <Circle 
          center={[40.8125, -74.0740]} 
          radius={25} 
          pathOptions={{ fillColor: "darkorange", color: "darkorange", fillOpacity: 0.45, weight: 0 }} 
        />

        {/* East Gate: Moderate */}
        <Circle 
          center={[40.8135, -74.0760]} 
          radius={40} 
          pathOptions={{ fillColor: "yellow", color: "yellow", fillOpacity: 0.3, weight: 1 }} 
        />

        {/* Markers with labels */}
        <Marker position={[40.8145, -74.0744]} icon={createDivIcon("red")}>
          <Popup>
            <div className="text-xs">
              <strong>Gate A (North Entrance)</strong>
              <p className="text-red-500 font-bold mt-1">Status: CRITICAL (94% congestion)</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={[40.8125, -74.0740]} icon={createDivIcon("orange")}>
          <Popup>
            <div className="text-xs">
              <strong>Halal Concessions Area</strong>
              <p className="text-orange-500 font-bold mt-1">Status: HEAVY (12 min wait time)</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
