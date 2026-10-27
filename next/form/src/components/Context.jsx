"use client";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const [api, setApi] = useState([]);
  //   console.log("object", api);
  useEffect(() => {
    async function fetchapi() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const convertedData = await data.json();
      //   console.log("API", convertedData);
      setApi(convertedData);
    }
    fetchapi();
  }, []);
  return (
    <>
      <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>
    </>
  );
}
