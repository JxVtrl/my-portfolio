import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Connect } from '../../component'

export const FastIntro: React.FC = () => {
    return (
        <Flex
            margin='220px auto 0'
            w='80%'
            flexDir='column'
        >
            <Heading fontFamily='Poppins'>
                I'm João,<br />Glad to see you!
            </Heading>
            <Text
                fontFamily='Poppins'
                fontSize={['12px', '20px']}
                lineHeight='28px'
                fontWeight='400'
            >
                I'm a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
            </Text>
            <Connect />
        </Flex>
    );
}
