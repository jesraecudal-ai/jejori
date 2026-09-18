import React, { useEffect } from "react";
import { useOperation } from "@/lib/OperationContext";

// Forces the active operation for a country-scoped route (e.g. /brasil/menu)
// so direct landings show the right country's branding/nav even without
// visiting the selector first. Children render once mounted.
export default function CountryRoute({ country, children }) {
  const { setOperation } = useOperation();
  useEffect(() => {
    setOperation(country);
  }, [country, setOperation]);
  return children;
}