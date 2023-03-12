import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <main>
     <header>
      <a href=""> My Simple Blog</a>
      <nav>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
           
      </nav>
    </header>
    </main>
    </>

    
  )
}
