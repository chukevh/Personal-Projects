// react render
ReactDOM.render(<h1 className="header">Hello, everyone!</h1>, document.getElementById("root"))

// same code as above, React allows to write HTML in JS and figures the rendering process
const h1 = document.createElement("h1")
h1.textContent = "Hey Erica"
h1.className = "header"
document.getElementById("root").append(h1)