import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/argentBankLogo.png'

function Header () {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__nav__link">
                    <img src={logo} alt="Argent Bank Logo" className='header__nav__link--logo'/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <Link to="/SignIn" className="header__nav__link  sign-in">
                    <FontAwesomeIcon icon={faCircleUser} className='header__nav__link--user-icon'/>Sign In
                </Link>
            </nav>
        </header>
    )
}

export default Header

/*
 <img src="" alt="Argent Bank Logo"/>*/