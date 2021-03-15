import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Navigation.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__links} href='#'>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item} href='#'>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item} href='#'>
            <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item} href='#'>
            <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.item} href='#'>
            <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;