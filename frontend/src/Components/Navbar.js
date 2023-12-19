import React from 'react';
import LogoImage from './Icon.png'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="top-header">
          <nav className="menu" id="top-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </nav>
          <img
  src={LogoImage}
  alt="Logo"
  className="logo-image"
  style={{ width: '80px', height: 'auto' }}
/>
          <div className="header-links">
            <a href="/cart/" className="basket-link">
              <span className="material-symbols-outlined basket">shopping_basket</span>
            </a>
            <button type="button" className="login-register">
            Login / Register
          </button>
          </div>
        </div>
      </header>
    </div>
  );
}
