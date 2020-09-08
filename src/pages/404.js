import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Page404 from '../components/Page404';

const NotFoundPage = () => (
  <Layout>
    <SEO title='Page Not Found' />
    <Page404 />
  </Layout>
);

export default NotFoundPage;
