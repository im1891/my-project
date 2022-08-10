import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile'
                     className={({isActive}) => isActive ? `${classes.active}` : undefined}>Profile</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='/dialogs'
                     className={({isActive}) => isActive ? `${classes.active}` : undefined}>Messages</NavLink>
        </div>

        <div className={classes.item}>
            <a>News</a>
        </div>

        <div className={classes.item}>
            <a>Music</a>
        </div>

        <div className={classes.item}>
            <a>Settings</a>
        </div>

    </nav>
}

export default Navbar;