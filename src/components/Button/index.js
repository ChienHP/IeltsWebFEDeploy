import React from 'react';
import './styles.css';

export const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="button-74" role="button">
            {children}
        </button>
    );
}