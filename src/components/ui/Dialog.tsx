import React from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    className?: string;
};

const Dialog: React.FC<Props> = ({
    isOpen,
    onClose,
    title,
    children,
    className = '',
}) => {
    const overlayClasses = isOpen
        ? 'fixed inset-0 bg-black opacity-50 z-50'
        : 'hidden';
    const dialogClasses = isOpen
        ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50'
        : 'hidden';

    return (
        <>
            <div className={overlayClasses} onClick={onClose}></div>
            <div className={`${dialogClasses} ${className}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button onClick={onClose}>
                        <svg
                            className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </>
    );
};

export default Dialog;
