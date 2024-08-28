import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <main>
      <Header className="header" />
      <div className='body'>
        {children}
      </div>
      <Footer className="footer" />
    </main>

  );
};

export default Layout;