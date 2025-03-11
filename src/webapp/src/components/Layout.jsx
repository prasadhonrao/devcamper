import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
