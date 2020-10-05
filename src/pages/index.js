import React from 'react';
import tw from 'twin.macro';
import SEO from '../components/Seo';

import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Container, Hero, Jumbotron } from '../components/Containers';
import { CustomH2, CustomH3, CustomH4 } from '../components/CustomHeadings';
import { SecondaryLink, AnchorLink } from '../components/CustomLinks';

import WebDesignAndDevelopmentIllustration from '../../pixeltrue-web-development-1.svg';
import PublicSpeakingIllustration from '../../pixeltrue-space-discovery-1.svg';
import TechWritingIllustration from '../../pixeltrue-support-1.svg';

export default () => {
  return (
    <>
      <SEO title='Home' />
      <Layout>
        <Hero>
          <CustomH2 tw='mb-2 text-white'>Stefan Nieuwenhuis</CustomH2>
          <CustomH3 tw='mb-8 text-gray-200'>
            I’m a Front End Developer specializing in <strong>React</strong>,{' '}
            <strong>Angular</strong>, <strong>Web Components</strong> and
            building web interfaces with a great user experience. Do you need a
            website?
          </CustomH3>
          <SecondaryLink to='/services'>See my services</SecondaryLink>
        </Hero>

        <section>
          <Container tw='p-10'>
            <CustomH2 tw='mb-8 text-gray-800'>What I do</CustomH2>
            <div tw='flex items-center flex-wrap mb-20'>
              <div tw='w-full md:w-1/2'>
                <CustomH4>Web Design and Development</CustomH4>
                <p tw='text-gray-900 mb-8'>
                  I build websites that help you improve your brand and business
                  needs. They are lightning fast, SEO ready, and mobile
                  responsive on the fly.
                </p>
              </div>
              <div tw='w-full md:w-1/2'>
                <img
                  src={WebDesignAndDevelopmentIllustration}
                  alt='Web Design and Development'
                />
              </div>
            </div>
            <div tw='flex items-center flex-wrap mb-20'>
              <div tw='w-full md:w-1/2'>
                <img src={PublicSpeakingIllustration} alt='Public Speaking' />
              </div>
              <div tw='w-full md:w-1/2 md:pl-10 order-first md:order-1'>
                <CustomH4>Public Speaking</CustomH4>
                <p tw='text-gray-900 mb-8'>
                  I give talks on Enterprise Applications, Microservices
                  Architecture, Micro Front Ends, JavaScript Frameworks (Angular
                  & React) and Design Systems.
                </p>
              </div>
            </div>
            <div tw='flex items-center flex-wrap mb-20'>
              <div tw='w-full md:w-1/2'>
                <CustomH4>Technical Writing</CustomH4>
                <p tw='text-gray-900 mb-8'>
                  I write articles on Web Components, JavaScript Frameworks,
                  Front End Architecture and Design Systems. Check out my{' '}
                  <AnchorLink to='/blog'>blog</AnchorLink> to learn more.
                </p>
              </div>
              <div tw='w-full md:w-1/2'>
                <img src={TechWritingIllustration} alt='Technical Writing' />
              </div>
            </div>
          </Container>
        </section>
        <Jumbotron>
          <CustomH2 tw='mb-6 text-center text-white'>Let's talk</CustomH2>
          <CustomH3 tw='my-4 mb-8 text-white'>
            I would be happy to help you. Just send me a message about what I
            can do for you.
          </CustomH3>
          <SecondaryLink to='/contact'>Let's talk</SecondaryLink>
        </Jumbotron>
      </Layout>
    </>
  );
};
