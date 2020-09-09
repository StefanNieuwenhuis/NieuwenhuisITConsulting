import React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro';
import axios from 'axios';
import SEO from '../components/Seo';
import Hero from '../components/Hero';

import CustomContainer from '../components/CustomContainer';
import { CustomH2, CustomH3 } from '../components/CustomHeadings';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactFormIllustration from '../../pixeltrue-support-1.svg';

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
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Please enter your name';
              }
              if (!values.email) {
                errors.email =
                  'Your email address is required to be able to contact you';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Please enter a valid Email Address';
              }
              if (!values.message) {
                errors.message = 'Please let me know what I can do for you';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              axios({
                method: 'post',
                url:
                  'https://getform.io/f/708a506e-8995-4032-a0a3-563dc403f1a0',
                data: values,
                headers: { Accept: 'application/json' },
              })
                .then(() => setStatus('success'))
                .catch(() => setStatus('error'))
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting, isValid, dirty, status }) => (
              <>
                {isSubmitting && (
                  <CustomH3>Sending your message to HQ</CustomH3>
                )}
                {status === 'success' && (
                  <CustomH3>
                    Your message is sent successfully.
                    <br />
                    We'll be in touch!
                  </CustomH3>
                )}
                {!status && !isSubmitting && (
                  <Form>
                    <CustomH2>Just say hi!</CustomH2>
                    <div tw='mb-4'>
                      <label htmlFor='name' tw='block mb-2'>
                        Name
                      </label>
                      <Field
                        type='name'
                        name='name'
                        placeholder='What is your name?'
                        tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        tw='text-red-600 mt-2 text-sm'
                      />
                    </div>
                    <div tw='mb-4'>
                      <label htmlFor='email' tw='block mb-2'>
                        Email
                      </label>
                      <Field
                        type='email'
                        name='email'
                        placeholder='What is your email address?'
                        tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        tw='text-red-600 mt-2 text-sm'
                      />
                    </div>
                    <div tw='mb-4'>
                      <label htmlFor='message' tw='block mb-2'>
                        Message
                      </label>
                      <Field
                        name='message'
                        as='textarea'
                        rows='6'
                        placeholder='How can I help you?'
                        tw='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      />
                      <ErrorMessage
                        name='message'
                        component='div'
                        tw='text-red-600 mt-2 text-sm'
                      />
                    </div>
                    <div tw='text-right'>
                      <button
                        type='submit'
                        style={{ backgroundColor: '#667eea' }}
                        css={[
                          tw`w-full md:w-auto text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`,
                          !(isValid && dirty) &&
                            tw`opacity-50 cursor-not-allowed`,
                        ]}
                        disabled={!(isValid && dirty)}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </>
            )}
          </Formik>
        </div>
      </div>
    </CustomContainer>
  </Layout>
);

export default Contact;
