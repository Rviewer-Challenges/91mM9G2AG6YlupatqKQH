import React from 'react';

interface AvatarProps {
    src: string;
    size: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
    return (
        <img
            src={src}
            alt="Avatar"
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
};

export default Avatar;
