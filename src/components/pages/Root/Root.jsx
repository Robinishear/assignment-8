import React from 'react';
import { Outlet } from 'react-router';
import Fooder from '../../Fooder/Fooder';
import Navbar from '../../Navbar/Navbar';

const Root = () => {
    return (
        <div>
         <Navbar></Navbar>
          <Outlet></Outlet>
          <Fooder></Fooder>
        </div>
    );
};

export default Root;