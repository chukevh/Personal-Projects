// React Components

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./github.png" width="40px"/>
                </nav>
            </header>
            <h1>Why I'm excited to learn React</h1>
            <ul>
                <li>It's sick</li>
                <li>Frontend is easy af</li>
            </ul>
            <footer>
                <small>Copyright 2023 Kevin Chu Development. All rights reserved.</small>
            </footer>
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))