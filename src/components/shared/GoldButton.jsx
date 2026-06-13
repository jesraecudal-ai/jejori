import React from "react";
import { Link } from "react-router-dom";

export default function GoldButton({ children, to, onClick, variant = "solid", className = "" }) {
  const base =
    variant === "solid"
      ? "bg-gold text-[#0B0B0B] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] font-semibold"
      : "border border-gold text-gold hover:bg-gold/10 font-medium";

  const classes = `inline-block px-8 py-3 text-sm font-sans tracking-widest uppercase rounded-sm transition-all duration-300 ${base} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}