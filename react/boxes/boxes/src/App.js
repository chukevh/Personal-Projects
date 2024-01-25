import React from "react"
import boxes from "./boxes.js"
import style from "./style.css"
import Box from "./Box.js"
import Messages from "./Messages.js"
import Form from "./Form.js"

//import './App.css';

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squaresElement = squares.map((square) => {
        return (
            <Box 
                key={square.id}
                id={square.id}
                on={square.on}
                toggle={toggle}
            />
        )
    })

    return (
        <div>
            <h1>Boxes will go here</h1>
            {squaresElement}
            <Messages />
            <Form />
        </div>
    )
}
