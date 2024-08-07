"use client";
import { describe } from "node:test";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  updated: boolean;
}

const DatabaseContext = createContext<ContextProps>({
  setUpdated: () => {},
  updated: true,
});

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [updated, setUpdated] = useState(true);

  const data = {
    setUpdated,
    updated,
  };

  return (
    <DatabaseContext.Provider value={data}>{children}</DatabaseContext.Provider>
  );
}
export const useDatabaseContext = () => useContext(DatabaseContext);
