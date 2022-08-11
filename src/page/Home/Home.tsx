import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Background, FastIntro } from '../../component';

export const Home: React.FC = () => {
  return (
    <Flex>
      <Background>
        <FastIntro />
      </Background>

    </Flex>
  );
}
