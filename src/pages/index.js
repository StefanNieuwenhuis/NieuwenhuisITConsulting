import React from 'react';
import tw from 'twin.macro';
import SEO from '../components/Seo';
import HomeContainer from '../containers/HomeContainer';

export default () => {
  return (
    <>
      <SEO title='Home' />
      <HomeContainer />
    </>
  );
};
