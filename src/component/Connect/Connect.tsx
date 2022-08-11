import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';


export const Connect: React.FC = () => {
    return (
        <Flex mt='15px' flexDir='column'>
            <Text
                fontFamily='Poppins'
                color='#7F8CFF'
                fontSize='20px'
                lineHeight='28px'
                fontWeight='500'
            >
                LET'S CONNECT
            </Text>
            <Flex gap='15px' mt='5px'>
                <Link href='https://github.com/JxVtrl' isExternal>
                    <i className="fa-brands fa-github fa-xl" />
                </Link>
                <Link href='https://www.linkedin.com/in/joao-vinicius-vitral/' isExternal>
                    <i className="fa-brands fa-linkedin-in fa-xl" />
                </Link>
            </Flex>
        </Flex>
    );
}
