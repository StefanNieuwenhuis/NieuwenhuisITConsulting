import React from 'react';
import tw from 'twin.macro';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { Container, Hero } from '../components/Containers';
import { CustomH2, CustomH3 } from '../components/CustomHeadings';

import ContactFormIllustration from '../../pixeltrue-support-1.svg';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <Hero>
      <CustomH2 tw='mb-6 text-white'>Let's talk</CustomH2>
      <CustomH3 tw='my-4 mb-8 text-white'>
        I would be happy to help you. Just send me a message about what I can do
        for you.
      </CustomH3>
    </Hero>

    <Container tw='p-10'>
      <div tw='flex items-start  flex-wrap'>
        <div tw='w-full md:w-1/2'>
          <img src={ContactFormIllustration} />
        </div>

        <div tw='w-full md:w-1/2 order-first md:order-1 self-center'>
          <ContactForm />
        </div>
      </div>
    </Container>
  </Layout>
);

export default Contact;
