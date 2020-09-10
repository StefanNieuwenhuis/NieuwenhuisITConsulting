import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { CustomH2 } from '../components/CustomHeadings';
import CustomContainer from '../components/CustomContainer';
import ThankYouIllustration from '../../pixeltrue-sleeping-1.svg';

const UnderConstruction = () => (
  <Layout>
    <SEO title='Thank You' />
    <CustomContainer>
      <div tw='flex items-center flex-wrap'>
        <div tw='w-full lg:w-1/2'>
          <img
            src={ThankYouIllustration}
            alt='Thank you for sending Stefan Nieuwenhuis a message'
          />
        </div>
        <div tw='w-full lg:w-1/2 mt-4 lg:pl-10 text-center'>
          <CustomH2 tw='mb-8'>
            Your message has been sent successfully. We'll keep in touch!
          </CustomH2>
          <Link
            to='/'
            style={{ backgroundColor: '#667eea' }}
            tw='text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'
          >
            Back to the Home Page
          </Link>
        </div>
      </div>
    </CustomContainer>
  </Layout>
);

export default UnderConstruction;
