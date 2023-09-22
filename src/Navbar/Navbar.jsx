// import React from 'react'
import './Navbar.css'
import Logo from '../../public/assets/Logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      
        <img src={Logo} />
      
      <div>
      <nav className="navbar-content">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Products</a>
        </li>
        <li className="nav-item">
          <a href="/about">Services</a>
        </li>
        <li className="nav-item">
          <a href="/services">Blog</a>
        </li>
        <li className="nav-item">
          <a href="/services">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/services">Login</a>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  )
}

export default Navbar
