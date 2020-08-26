import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) => (
  <div className="container">
    <Menu />
    {children}
  </div>
);

export default Layout
