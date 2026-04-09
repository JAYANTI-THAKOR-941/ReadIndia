import React from 'react'
import { FaBook } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';

const Header = () => {

  const navigate = useNavigate();

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
        <button onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Header