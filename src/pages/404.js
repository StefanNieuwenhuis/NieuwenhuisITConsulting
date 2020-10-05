import React from 'react';
import tw from 'twin.macro';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { PaddedContainer } from '../components/Containers';
import { CustomH2 } from '../components/CustomHeadings';
import { PrimaryLink } from '../components/CustomLinks';

import NotFoundIllustration from '../../pixeltrue-error-1.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title='Page Not Found' />
    <PaddedContainer>
      <div tw='flex items-center flex-wrap'>
        <div tw='w-full md:w-1/2'>
          <img src={NotFoundIllustration} alt='This page is not found' />
        </div>
        <div tw='w-full md:w-1/2 text-center'>
          <CustomH2 tw='mb-8'>This page is not found</CustomH2>
          <PrimaryLink to='/'>Back to the Home Page</PrimaryLink>
        </div>
      </div>
    </PaddedContainer>
  </Layout>
);

export default NotFoundPage;
