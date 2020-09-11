import React, { useRef } from 'react';
import { navigate } from 'gatsby';

import tw from 'twin.macro';
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CustomH2 } from './CustomHeadings';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Your email address is required to be able to contact you'),
  message: Yup.string().required('Please let me know what I can do for you'),
});

const ContactForm = () => {
  const formEl = useRef(null);

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURI(data[key])}`)
      .join('&');

  return (
    <>
      <CustomH2>Just say hi!</CustomH2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(data) => {
          fetch(formEl.current.action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              ...data,
              'form-name': formEl.current.getAttribute('name'),
            }),
          })
            .then(() => navigate(formEl.current.action))
            .catch((err) => console.error(err));
        }}
      >
        {({ isSubmitting }) => (
          <Form
            ref={formEl}
            name='Contact Form'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            action='/thank-you'
          >
            <pre>{JSON.stringify(isSubmitting)}</pre>
            <Field type='hidden' name='form-name' />
            <Field type='hidden' name='bot-field' />
            <div tw='mb-4'>
              <label htmlFor='name' tw='block mb-2'>
                Name
              </label>
              <Field
                type='name'
                name='name'
                placeholder='What is your name?'
                tw='shadow appearance-none border rounded w-full py-4 px-5 md:py-2 md:px-3 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base'
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
                tw='shadow appearance-none border rounded w-full py-4 px-5 md:py-2 md:px-3 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base'
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
                tw='shadow appearance-none border rounded w-full py-4 px-5 md:py-2 md:px-3 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base'
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
                  isSubmitting && tw`opacity-50 cursor-not-allowed`,
                ]}
              >
                <span css={[isSubmitting && tw`hidden`]}>Send</span>
                <span css={[!isSubmitting && tw`hidden`]}>
                  Sending your message to HQ
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
