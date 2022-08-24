import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { data } from '../../mocks';
// import { Container } from './styles';

export const Projects: React.FC = () => {
    return (
        <Flex mt='280px' flexDir='column' w='100%' gap='100px'>
            {data.projects.map((item: any) => (
                <Flex
                    key={item.id}
                    border='1px solid #efe1e6'
                    borderRadius='24px'
                    h='500px'
                >
                    {item.id % 2 === 0 && <Image src={item.src} />}
                    <Flex>
                        {item.name}
                    </Flex>
                    {item.id % 2 !== 0 && <Image src={item.src} />}
                </Flex>
            ))}
        </Flex>
    );
}
