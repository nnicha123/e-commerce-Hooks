import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div>
            <nav className="navEcommerce">
                <h3>Logo</h3>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/login'>
                        <li>Login</li>
                    </Link>
                    <Link to='/checkout'>
                        <li>Checkout</li>
                    </Link>
                    <Link to='/favourites'>
                        <li>Favourites</li>
                    </Link>
                    <Link to='/contactus'>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
