import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro';

import SEO from '../components/Seo';
import Hero from '../components/Hero';

import CustomContainer from '../components/CustomContainer';
import { CustomH2, CustomH3 } from '../components/CustomHeadings';

import ContactFormIllustration from '../../pixeltrue-support-1.svg';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <Hero>
      <CustomContainer>
        <CustomH2 tw='mb-6 text-white'>Let's talk</CustomH2>
        <CustomH3 tw='my-4 mb-8 text-white'>
          I would be happy to help you. Just send me a message about what I can
          do for you.
        </CustomH3>
      </CustomContainer>
    </Hero>

    <CustomContainer tw='p-10'>
      <div tw='flex items-start  flex-wrap'>
        <div tw='w-full md:w-1/2'>
          <img src={ContactFormIllustration} />
        </div>

        <div tw='w-full md:w-1/2 order-first md:order-1 self-center'>
          <ContactForm />
        </div>
      </div>
    </CustomContainer>
  </Layout>
);

export default Contact;
