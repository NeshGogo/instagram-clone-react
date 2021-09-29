import React from 'react';
import Header from './Header';
import '../assets/styles/components/Layout.scss';

const Layout = ({children}) => (
  <>
    <Header />
    <main className='main'>
      {children}
    </main>
  </>
);

export default Layout;