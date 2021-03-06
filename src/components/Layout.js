import React from 'react';
import { useSiteRoutes } from '../hooks/useSiteRoutes';
import Header from './Header';
import tw from 'twin.macro';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div tw='text-gray-700 bg-white font-light h-screen flex flex-col'>
      <Header />
      <main tw='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
