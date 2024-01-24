import React from "react"

export default function Box(props) {


    const styles = {
        backgroundColor: props.on ? "black" : "transparent" 
    }


    return (
        <div 
            style={styles} 
            className="box" 
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}

// const [square, setSquare] = React.useState(props.on)


// function toggleSquare() {
//     setSquare(prevState => !prevState)
// }