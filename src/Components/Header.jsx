import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/argentBankLogo.png'

function Header ({title, hideSignOutOn = ['/SignIn', '/']}) {
    const location = useLocation();
    const showSignOut = !hideSignOutOn.includes(location.pathname)
    return (
        <header>
            <nav className="header__nav">
                <Link to="/" className="header__nav__link">
                    <img src={logo} alt="Argent Bank Logo" className='header__nav__link--logo'/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className="NavLinks">
                    <Link to="/SignIn" className="header__nav__link  sign-in">
                        <FontAwesomeIcon icon={faCircleUser} className='header__nav__link--user-icon'/>{title}
                    </Link>
                    {showSignOut && (
                    <Link to="/" className='header__nav__link sign-out'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='header__nav__link--user-icon'/>Sign Out
                    </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header

/*
 <img src="" alt="Argent Bank Logo"/>*/