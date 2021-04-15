import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/logo.jpg';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <img className={classes.header__image} src={logo}/>
            </div>
            <div class={classes.header__text}>WildPand</div>
        </header>
    )
}

export default Header;