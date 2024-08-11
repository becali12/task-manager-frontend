import React from 'react';
import '../styles/Welcome.css'

function WelcomePage() {
    return (
        <div className="welcome-page">
            <div className="welcome-content">
                <h1>Welcome to iTasks</h1>
                <p> Log in or create an account to seamlessly manage your tasks accross all your devices!</p>
                <button className='welcome-button'>Get started</button>
            </div>
        </div>
    );
}

export default WelcomePage
