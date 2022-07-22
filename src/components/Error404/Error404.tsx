import React from 'react';
import c from './Error404.module.css';

export const Error404 = React.memo ( () => {
    return (
        <div className={c.notFound}>
            <div>
                <h1>Error 404</h1>
                <h1>Page not found</h1>
            </div>
        </div>
    );
} );

