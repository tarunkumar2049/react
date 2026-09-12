import { createContext, useState } from "react";

export const ThemeContext = createContext(0);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const ToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>{children}</ThemeContext.Provider>
    )
}