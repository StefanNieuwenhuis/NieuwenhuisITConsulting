import React from 'react';

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
