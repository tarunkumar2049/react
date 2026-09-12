import { useContext } from "react"
import Component2 from "./Component2"
import { ExampleContext } from "./globalData/Context2"

export default function Component1() {
    const data1 = useContext(ExampleContext)
    return (
        <div>
            <br></br>
            <br></br>
            <h1>Data</h1>
            <span>Component 1 </span>
            <span>c1-- {data1}  </span>
            < Component2 />
        </div>
    )
}