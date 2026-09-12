import { useContext } from "react"
import Component3 from "./Component3"
import { ExampleContext } from "./globalData/Context2"

export default function Component2() {
    const data2 = useContext(ExampleContext)
    return (
        <div>
            <h1>Data 2</h1>
            <span>Component 2 </span>
            <span>c2-- {data2} </span>
            <Component3 />
        </div>
    )
}