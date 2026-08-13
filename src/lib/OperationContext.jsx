import React, { createContext, useContext, useState } from "react";

const OperationContext = createContext(null);

export function OperationProvider({ children }) {
  const [operation, setOperation] = useState(null);
  return (
    <OperationContext.Provider value={{ operation, setOperation }}>
      {children}
    </OperationContext.Provider>
  );
}

export const useOperation = () => {
  const ctx = useContext(OperationContext);
  if (!ctx) return { operation: null, setOperation: () => {} };
  return ctx;
};