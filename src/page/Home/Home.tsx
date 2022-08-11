import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Background, FastIntro } from '../../component';

export const Home: React.FC = () => {
  return (
    <Flex pos='relative' h='500px' overflow='hidden'>
      {/* <Background src='https://images.unsplash.com/photo-1657749818427-d7091531210e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80' /> */}
      <FastIntro />
      

    </Flex>
  );
}
