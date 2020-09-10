import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import Recaptcha from 'react-google-recaptcha';
import tw from 'twin.macro';
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CustomH2 } from './CustomHeadings';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Your email address is required to be able to contact you'),
  message: Yup.string().required('Please let me know what I can do for you'),
});

const ContactForm = () => {
  const recaptchaEl = useRef(null);
  const formEl = useRef(null);
  const [recaptcha, setRecaptcha] = useState({});

  const handleRecaptcha = (value) =>
    setRecaptcha({ 'g-recaptcha-response': value });

  return (
    <>
      <CustomH2>Just say hi!</CustomH2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values) => {
          fetch('/', {
            method: 'POST',
            body: { ...values, ...recaptcha },
          })
            .then(() => navigate(formEl.current.action))
            .catch((err) => console.error(err));
        }}
      >
        {() => (
          <Form
            ref={formEl}
            name='Contact Form'
            method='POST'
            data-netlify='true'
            data-netlify-recaptcha='true'
            action='/thank-you'
          >
            <label tw='hidden'>
              Don’t fill this out if you're human: <input name='bot-field' />
            </label>
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
            <div tw='mb-4'>
              <Recaptcha
                ref={recaptchaEl}
                sitekey={RECAPTCHA_KEY}
                onChange={handleRecaptcha}
              />
            </div>
            <div tw='text-right'>
              <button
                type='submit'
                style={{ backgroundColor: '#667eea' }}
                css={[
                  tw`w-full md:w-auto text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`,
                ]}
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
