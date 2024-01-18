const element = (
    <div>
        <h1 className="header">Hello, everyone!</h1>
        <p>Erica is cute</p>
    </div>
)


ReactDOM.render(element, document.getElementById("root"))
console.log(element)


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


ReactDOM.render(navbar, document.getElementById("root"))
// React renders the elements, it's just JSON objects
//document.getElementById("root").append(JSON.stringify(navbar))

// reactDOM.render(
//     <div>
//         <Header />
//     </div>
//     , document.getElementById("root")
// )