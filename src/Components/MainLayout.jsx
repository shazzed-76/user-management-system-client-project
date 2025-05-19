import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <section className="max-w-5xl mx-auto p-5 md:px-10 min-h-[calc(100vh-64px)] grid items-center">
            <Outlet />
          </section>
        </main>
      </>
    );
};

export default MainLayout;