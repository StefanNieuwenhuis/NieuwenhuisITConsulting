import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro';
import SEO from '../components/Seo';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import CustomContainer from '../components/CustomContainer';
import { CustomH2, CustomH3 } from '../components/CustomHeadings';

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
    <ContactForm />
  </Layout>
);

export default Contact;
