import React from 'react';
import Header from './Header';

const Layout = ({Children}) => (
  <>
    <Header />
    {Children}
  </>
);

export default Layout;