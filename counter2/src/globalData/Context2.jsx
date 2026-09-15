import { createContext, useState } from "react";

export const ExampleContext = createContext(0);

export default function ExampleProvider({ children }) {
  const [data, setData] = useState(50);
  return (
    <ExampleContext.Provider value={data}>{children}</ExampleContext.Provider>
  );
}
