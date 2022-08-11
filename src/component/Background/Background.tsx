import React from 'react';

interface BackgroundProps {
    children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}
