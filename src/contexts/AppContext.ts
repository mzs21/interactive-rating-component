import React from "react";

interface AppContextType {
  numValue: number;
  setNumValue: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextType>({
  numValue: 0,
  setNumValue: () => console.warn("no context provided"),
});
