import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/product">Product Page</Link></li>
                <li><Link to="/blog">Blog Page</Link></li>
            </ul>

        </>
    )
}

export default Navbar
