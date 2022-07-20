import React from 'react';
import c from '../Preloader/Preloader.module.css';

export const Preloader = () => {
    return (
        <div>
            <div className={c.ldsRipple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

