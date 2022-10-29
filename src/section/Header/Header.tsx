import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Flex, ListItem, UnorderedList, Link, Heading } from '@chakra-ui/react';
import { useDevice } from '../../hooks';

const list = [
    {
        name: 'Home',
        href: '/home'

    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

export const Header: React.FC = () => {
    const { isMobile } = useDevice();
    return (
        <Flex
            justify='space-between'
            fontFamily='Poppins'
            w='80%'
            m='10px auto'
        >
            <Heading
                as='h1'
                fontSize='24px'
                fontWeight='800'
                color='#6070ff'
            >
                João Vinicius Vitral
            </Heading>
            <nav>    
                <UnorderedList
                    display='flex'
                    flexDirection={isMobile ? 'column' : 'row'}
                    listStyleType='none'
                    gap='40px'
                    fontSize='16px'
                    fontWeight='500'
                >
                    {list.map(item => (
                        <ListItem
                            key={item.name}
                            transition='all 0.5s'
                            padding='2px 5px'
                            borderRadius={5}
                            _hover={{
                                bg: '#6070ff',
                                color: '#fff',
                            }}
                            cursor='pointer'
                        >
                            {item.name}
                        </ListItem>
                    ))}
                </UnorderedList>
            </nav>
        </Flex>
    );
}
