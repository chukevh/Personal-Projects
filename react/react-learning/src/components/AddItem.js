import React from "react"

export default function AddItems() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    const thingsElement = things.map((thing) => <p>{thing}</p>)

    function handleClick() {
        setThings(prevState => [...prevState, "Another thing"])
    }

    return (
        <div>
            <button onClick={handleClick}>Add to Cart</button>
            {thingsElement}
        </div>
        
    )
}