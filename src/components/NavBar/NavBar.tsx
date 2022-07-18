import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './navBar.module.css';

export const NavBar = () => {
    return (
        <div className={c.NavBar}>

            <div className={c.link}>
                <NavLink to={'/'}>Now</NavLink>
                <NavLink to={'/hourly'}>Hourly</NavLink>
                <NavLink to={'/threeDays'}>3 Days</NavLink>
            </div>
            <div>
                <input type="text"/>
            </div>

        </div>
    );
};

