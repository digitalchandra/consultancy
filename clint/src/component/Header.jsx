import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { arrow } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <>
    <main>
     <header>
      <a href=""> DRS Education </a>
      <nav>
            <Link to="/"> Abroad Study  </Link>
            <Link to="/about"> Services </Link>
            <Link to="/contact"> Test Preparation  </Link>
            <Link to="/login"> Gallery</Link>
            <Link to="/register"> Blog & News</Link>
            <Link to="/register"> Contact</Link>
           
      </nav>
    </header>
    </main>
    </>

    
  )
}
