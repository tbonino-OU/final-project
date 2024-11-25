import React from 'react'
import "../css/Header.css"
import Nav from './Nav'
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <div className="header">
        <Nav />
        
        <div className="logo">
            <img alt="The logo for our site, stylized MP" title="Mashed Potatoes Logo" src= {Logo} />
        </div>
        <h1>Mashed Potatoes</h1>
    </div>
  )
}

export default Header;