// React component - returns react elements, (UI), resuable code

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./github.png" width="40px"/>
                <ul className="nav-items">
                    
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Why I'm excited to learn React</h1>
            <ol>
                <li>React is Cool</li>
                <li>I like Frontend</li>
                <li>Erica is cute</li>
            </ol>
        </div>
    )
}

function Footer()  {
    return (
        <footer>
            <small>Copyright 2023 Kevin Chu Development. All rights reserved.</small>
        </footer>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))