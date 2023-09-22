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
          <a >Products</a>
        </li>
        <li className="nav-item">
          <a >Services</a>
        </li>
        <li className="nav-item">
          <a >Blog</a>
        </li>
        <li className="nav-item">
          <a >About Us</a>
        </li>
        <li className="nav-item">
          <a >Contact</a>
        </li>
        <li className="nav-item">
          <a >Login</a>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  )
}

export default Navbar
