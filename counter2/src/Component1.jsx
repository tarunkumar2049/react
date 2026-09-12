import { useContext } from "react"
import Component2 from "./Component2"
import { ExampleContext } from "./globalData/Context2"
import { ThemeContext } from "./globalData/ThemeContext";

export default function Component1() {
    const data1 = useContext(ExampleContext);
    // const theme = useContext(ThemeContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <span className="flex">Theme : {theme}</span>

            <button className="border-2 p-1" onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button> 
            <br></br>
            <br></br>

            <h1>Data</h1>
            <span>Component 1 </span>
            <span>c1-- {data1} </span>
            < Component2 />
        </div>
    )
}