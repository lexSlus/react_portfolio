import React from 'react'
import './style.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Oleksii</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="src/components/header/Header#!" className="btn">Download CV</a>
            </div>
        </header>
    )
}
