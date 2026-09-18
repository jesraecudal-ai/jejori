import React from "react";

// Renders an address with the street number visually blurred (privacy / "por confirmar").
export default function BlurredAddress({ address, className = "" }) {
  const parts = address.split(/(\d{1,4})/g);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        /^\d{1,4}$/.test(p) ? (
          <span key={i} className="blur-[3px] select-none px-0.5">
            {p}
          </span>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </span>
  );
}