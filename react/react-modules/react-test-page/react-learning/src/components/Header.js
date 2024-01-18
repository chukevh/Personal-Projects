import logo from '../images/react-icon.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />
                <h1>React Test</h1>
                <h3>React Course - Project 1</h3>
            </nav>
        </header>
    )
}

//export default Header;