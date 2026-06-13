import React from "react";
import { LayoutGrid, List } from "lucide-react";

export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex items-center gap-1 bg-[#1a1a1a] rounded-sm p-1 border border-[#D4AF37]/10">
      <button
        onClick={() => setView("visual")}
        className={`p-2 rounded-sm transition-all duration-300 ${
          view === "visual"
            ? "bg-gold text-[#0B0B0B]"
            : "text-[#F2F2F2]/40 hover:text-gold"
        }`}
        title="Visual Feast"
      >
        <LayoutGrid size={16} />
      </button>
      <button
        onClick={() => setView("minimal")}
        className={`p-2 rounded-sm transition-all duration-300 ${
          view === "minimal"
            ? "bg-gold text-[#0B0B0B]"
            : "text-[#F2F2F2]/40 hover:text-gold"
        }`}
        title="Quick Scan"
      >
        <List size={16} />
      </button>
    </div>
  );
}