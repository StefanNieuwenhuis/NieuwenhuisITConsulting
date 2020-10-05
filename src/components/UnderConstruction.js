import React from 'react';
import tw from 'twin.macro';

import { PaddedContainer } from './Containers';
import { CustomH2 } from './CustomHeadings';
import { PrimaryLink } from './CustomLinks';

import UnderConstructionIllustration from '../../pixeltrue-settings.svg';

const UnderConstruction = () => (
  <PaddedContainer>
    <div tw='flex items-center flex-wrap'>
      <div tw='w-full md:w-1/2'>
        <img
          src={UnderConstructionIllustration}
          alt='This page is under construction'
        />
      </div>
      <div tw='w-full md:w-1/2 text-center'>
        <CustomH2 tw='mb-8'>This page is under construction</CustomH2>
        <PrimaryLink to='/'>Back to the Home Page</PrimaryLink>
      </div>
    </div>
  </PaddedContainer>
);

export default UnderConstruction;
