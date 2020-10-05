import React from 'react';
import tw from 'twin.macro';

export const Container = tw.div`container mx-auto px-6`;
export const PaddedContainer = tw(Container)`py-20`;

export const Hero = ({ children }) => (
  <section
    style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
  >
    <PaddedContainer>{children}</PaddedContainer>
  </section>
);

export const Jumbotron = ({ children }) => (
  <section style={{ backgroundColor: '#667eea' }}>
    <PaddedContainer tw='text-center'>{children}</PaddedContainer>
  </section>
);
