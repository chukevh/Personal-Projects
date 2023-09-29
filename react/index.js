// import React from "react"
// import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Kevin's shop</h1>
        <ul>
            <li>Pricing</li>
            <li>Merch</li>
            <li>About</li>
        </ul>
    </nav>
)

const hey = (
    <h1>Hey Erica</h1>
)

const shopWelcome = (
    <h2>Welcome to my shop</h2>
)

ReactDOM.render(navbar, document.getElementById("root"))
//document.getElementById("root").append(JSON.stringify(navbar))

// reactDOM.render(
//     <div>
//         <Header />
//     </div>
//     , document.getElementById("root")
// )