import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../../section'

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <Flex flexDir='column' w="100%" h='100vh' >
      <Header />
      {children}
    </Flex>
  );
}
