import { useContext } from "react"
import { ExampleContext } from "./globalData/Context2"

export default function Component3({ count }) {
    const abc = useContext(ExampleContext);
    return (
        <div>
            <br></br>
            <h1>Data 3</h1>
            <span>Component 3 </span>
            <span>c3-- {count}</span>

        </div>
    )
}