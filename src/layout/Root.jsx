import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar';

const Root = () => {
    return (
      <div>
        <div className='h-20'>
          <NavBar></NavBar>
        </div>
        <div className="container mx-auto min-h-[calc(100vh-200px)]">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;