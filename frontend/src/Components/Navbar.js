import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <header>
        <div className="top-header">
            {/* <img src="./images/logo.png" alt=""> */}
            <a href="#">Login / Register</a>
        </div>
        <nav>
            <div className="menu" id="top-menu">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About us</li></a>
                    <a href="/contact"><li>Contact us</li></a>
                </ul>
                <a href="/cart/">
                    <span className="material-symbols-outlined basket">shopping_basket</span>
                </a>
            </div>
        </nav>
        </header>
    </div>
  )
}
