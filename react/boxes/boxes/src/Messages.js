import React from "react"

export default function Messages() {
    const [messages, setMessages] = React.useState(["a","b"])

    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up</h1> :
                <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>
            }
        </div>
    )
}

// conditional rendering sometimes display things or not based on a condition