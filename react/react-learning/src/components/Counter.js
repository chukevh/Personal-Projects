import React from "react"

export default function State() {
    const [counter, setCounter] = React.useState(0)

    function minusCounter() {
        setCounter(counter-1)
    }

    function increaseCounter() {
        // if new value of state depends on old value then use callback function
        setCounter(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={minusCounter}>-</button>
            <div>
                <h1>{counter}</h1>
            </div>
            <button onClick={increaseCounter}>+</button>
        </div>
    )
}
