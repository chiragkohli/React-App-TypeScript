import React from "react";
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const nav = (props: any) => {
    return (<header className={classes.NavSection}>
        <ul>
            <li><NavLink to="/" className={(data) => data?.isActive ? classes.Activee : ''}>Home</NavLink></li>
            <li><NavLink to="/theme" className={(data) => data?.isActive ? classes.Activee : ''}>Theme</NavLink></li>
        </ul>
    </header>);
};

export default nav;