import React from "react"

export default function State() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function toggleGoingOut() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Do I want to go out</button>
            <div>
                <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

// answer = isGoingOut ? "Yes" : "No"

/*  

export default function App () {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "xxx"
        isFavorite: true
    })

    // ... spreads the old JSON object then returns latest changed key
    function toggleFav() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavourite: !prevContact.isFavourite
            }
        })
    }
    return (
        <div>
            <button onClick={toggleFav}/>
        </div>
    )
}


*/