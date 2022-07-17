import React from 'react';
import {NavLink} from "react-router-dom";
import c from './navBar.module.css'

export const NavBar = () => {
    return (
        <div className={c.NavBar}>
            <div>
                <NavLink to={'/now'}>Now</NavLink>
                <NavLink to={'/hourly'}>Hourly</NavLink>
                <NavLink to={'/forWeek'}>7 Days</NavLink>
            </div>
<div><input type="text"/></div>
        </div>
    );
};

