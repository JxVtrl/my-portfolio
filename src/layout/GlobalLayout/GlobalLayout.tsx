import React from 'react';
import { Header } from '../../section'

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
