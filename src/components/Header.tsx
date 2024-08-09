import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/iTasksLogo.png';

function Header() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='iTasks' className='navbar-logo'/>
            <Link to="/" className='navbar-title'>iTasks</Link>
            <ul className='navbar-list'>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/tasks">My Tasks</Link></li>
            </ul>
        </nav>
    );
}

export default Header;