import React from 'react';
import classNames from 'classnames';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    width?: string;
    height?: string;
    borderRadius?: string;
    border?: string;
    padding?: string;
    fontSize?: string;
    backgroundColor?: string;
    color?: string;
    margin?: string;
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder = '',
    value = '',
    onChange = () => {},
    required = false,
    disabled = false,
    width = 'w-full',
    height = 'h-10',
    borderRadius = 'rounded-md',
    border = 'border-gray-300',
    padding = 'px-3',
    fontSize = 'text-base',
    backgroundColor = 'bg-white',
    color = 'text-gray-700',
    margin = 'my-2',
}) => {
    const inputClasses = classNames(
        'outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
        'focus:border-transparent',
        width,
        height,
        borderRadius,
        border,
        padding,
        fontSize,
        backgroundColor,
        color,
        margin
    );

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={inputClasses}
        />
    );
};

export default Input;
