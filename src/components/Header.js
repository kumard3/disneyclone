import React from 'react'
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import  '../styles/Header.css'

function Header() {
    return (
        <div className="header" >
            <nav className="header_nav" >
            <img className="nav-logo" src={logo} alt="logo"/>
            <div className="nav-menu">
            <a>
                <img src={home} alt="home"/>
            
            </a>
            </div>
            
            </nav>
            
        </div>
    )
}

export default Header
