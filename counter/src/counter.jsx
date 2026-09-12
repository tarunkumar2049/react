import { useState } from "react";
import "./counter.css"

export default function Counter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <div id="div">
                <h1 id="count" >{count}</h1>
                <span className="button">
                    <button id="btn1" onClick={() => { setCount(count - 1) }}> Decrease </button>
                    <button id="btn2" onClick={() => { setCount(count + 1) }}> Increase </button>
                </span>
            </div>
        </>
    )
}