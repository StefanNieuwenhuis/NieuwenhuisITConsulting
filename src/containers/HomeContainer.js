import React from 'react';
import tw from 'twin.macro';

import Layout from '../components/Layout';
import CustomContainer from '../components/CustomContainer';
import Hero from '../components/Hero';
import { Link } from 'gatsby';
import { CustomH2, CustomH3, CustomH4 } from '../components/CustomHeadings';

import WebDesignAndDevelopmentIllustration from '../../pixeltrue-web-development-1.svg';
import PublicSpeakingIllustration from '../../pixeltrue-space-discovery-1.svg';
import TechWritingIllustration from '../../pixeltrue-support-1.svg';

const CtaLink = tw(
  Link
)`bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`;

const HomeContainer = () => (
  <Layout>
    <Hero>
      <CustomContainer>
        <CustomH2 tw='mb-2 text-white'>Stefan Nieuwenhuis</CustomH2>
        <CustomH3 tw='mb-8 text-gray-200'>
          I’m a freelance Front End Developer specializing in{' '}
          <strong>React</strong>, <strong>Angular</strong>,{' '}
          <strong>Web Components</strong> and building web interfaces with a
          great user experience. Do you need a website?
        </CustomH3>
        <CtaLink to='/services'>See my services</CtaLink>
      </CustomContainer>
    </Hero>
    <section>
      <CustomContainer tw='p-10'>
        <CustomH2 tw='mb-8 text-gray-800'>What I do</CustomH2>
        <div tw='flex items-center flex-wrap mb-20'>
          <div tw='w-full md:w-1/2'>
            <CustomH4>Web Design and Development</CustomH4>
            <p tw='text-gray-600 mb-8'>
              I build websites that help you improve your brand and business
              needs. They are lightning fast, SEO ready, and mobile responsive
              on the fly.
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
            <p tw='text-gray-600 mb-8'>
              I give talks on Enterprise Applications, Microservices
              Architecture, Micro Front Ends, JavaScript Frameworks (Angular &
              React) and Design Systems.
            </p>
          </div>
        </div>
        <div tw='flex items-center flex-wrap mb-20'>
          <div tw='w-full md:w-1/2'>
            <CustomH4>Technical Writing</CustomH4>
            <p tw='text-gray-600 mb-8'>
              I write articles on Web Components, JavaScript Frameworks, Front
              End Architecture and Design Systems. Check out my{' '}
              <Link to='/blog' style={{ color: '#667eea' }}>
                blog
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <div tw='w-full md:w-1/2'>
            <img src={TechWritingIllustration} alt='Technical Writing' />
          </div>
        </div>
      </CustomContainer>
    </section>
    <section style={{ backgroundColor: '#667eea' }}>
      <CustomContainer tw='text-center py-20'>
        <CustomH2 tw='mb-6 text-center text-white'>Let's talk</CustomH2>
        <CustomH3 tw='my-4 mb-8 text-white'>
          I would be happy to help you. Just send me a message about what I can
          do for you.
        </CustomH3>
        <Link
          to='/contact'
          tw='bg-white font-bold rounded-full mt-8 py-4 px-8 shadow-lg uppercase tracking-wider'
        >
          Let's talk
        </Link>
      </CustomContainer>
    </section>
  </Layout>
);

export default HomeContainer;
