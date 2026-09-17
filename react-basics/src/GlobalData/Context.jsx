import { createContext } from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const number = 9988554477;
  const mail = "react123@gmail.com";
  return <DataContext.Provider value={[number, mail]}>{children}</DataContext.Provider>;
}
