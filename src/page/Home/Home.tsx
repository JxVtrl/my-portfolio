import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Background, FastIntro, Projects } from '../../component';

export const Home: React.FC = () => {
  return (
    <Flex flexDir='column' h='100%' overflow='auto'>
      <FastIntro />
      <Projects />
    </Flex>
  );
}
