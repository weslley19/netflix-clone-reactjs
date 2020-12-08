import React from 'react';
import './Header.css';

export default ({ black }) => {
    return (
        <header className={ black ? 'black' : '' }>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="Netflix" />                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" title="Usuário" />
                </a>
            </div>
        </header>
    );
}