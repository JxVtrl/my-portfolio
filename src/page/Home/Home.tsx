import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AboutMe, FastIntro, Projects } from '../../component';
import { Footer } from '../../section';

export const Home: React.FC = () => {
  return (
    <Flex flexDir='column' h='100%' overflow='auto'>
      <FastIntro />
      <AboutMe />
      <Projects />
      <Footer />
    </Flex>
  );
}
