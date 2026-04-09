import React from 'react'
import { FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <h1><FaBook className='book-icon'/>Read<span>India</span></h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Header