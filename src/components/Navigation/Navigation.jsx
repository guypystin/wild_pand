import { NavLink } from 'react-router-dom';
import React from 'react';
import RecentDialogs from './RecentDialogs/RecentDialogs'
import classes from './Navigation.module.css';

const NavItem = (props) => {
    return(
        <div className={classes.item} href='#'>
                <NavLink to={"/" + props.link} activeClassName={classes.active}>{props.itemName}</NavLink>
        </div>
    )
}

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <NavItem link="profile" itemName="Profile" />
            <NavItem link="dialogs" itemName="Messages" />
            <NavItem link="news" itemName="News" />
            <NavItem link="music" itemName="Music" />
            <NavItem link="Settings" itemName="Settings" />

            <RecentDialogs state = {props.statex}/>
        </nav>
    )
}

export default Nav;