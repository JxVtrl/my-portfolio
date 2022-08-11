import React from 'react';
import { Image } from '@chakra-ui/react'

interface BackgroundProps {
    src: string;
}

export const Background: React.FC<BackgroundProps> = ({ src }) => {
    return (
        <Image w='100%' zIndex={-1} pos='absolute' src={src} />
    );
}
