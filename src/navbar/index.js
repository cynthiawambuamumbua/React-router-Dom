export default function Navbar(){
    return <nav className="nav-bar">
        <a href="/" className="products">PRODUCTS PAGE</a>
        <ul>
            <li className="active">
                <a href="/products">Products</a>
                <a href="/about">About</a>
            </li>
        </ul>

    </nav>
}