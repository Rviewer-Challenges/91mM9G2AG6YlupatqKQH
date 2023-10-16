import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
