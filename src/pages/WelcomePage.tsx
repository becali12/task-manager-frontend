import React from 'react';
import '../styles/Welcome.css'
import { Link } from 'react-router-dom';

function WelcomePage() {
    return (
        <div className="welcome-page">
            <div className="welcome-content">
                <h1>Welcome to iTasks</h1>
                <p> Log in or create an account to seamlessly manage your tasks accross all your devices!</p>
                <Link to='/login' className='welcome-button'>Get started</Link>
            </div>
        </div>
    );
}

export default WelcomePage
