import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
    return (
      <div>
        <div className='h-20'>
          <NavBar></NavBar>
        </div>
        <div className="container mx-auto min-h-[calc(100vh-200px)]">
          <Outlet></Outlet>
        </div>

        <div className='mt-20'>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;