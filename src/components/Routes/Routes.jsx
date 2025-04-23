import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import Fooder from '../Fooder/Fooder';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home'
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';
// import Proshno from '../pages/proshno/Proshno';
import MyBookings from '../pages/MyBookings/MyBookings';

const profileLoader = async ({ params }) => {
  const { profileId } = params;

  const res = await fetch('/doctors-information/info.json');
  const data = await res.json();

  const found = data.find((u) => u.reg_no.toString() === profileId); // convert to string just in case

  if (!found) {
    throw new Response("Not Found", { status: 404 });
  }

  return found;
};
export const router = createBrowserRouter([
    {
         path: "/",
       Component: Root,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
          index: true,
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('/Componetsdata.json')
         },
         {
          path: "/lawyer-details/:id",
          element: <LawyerDetails />, 
          
        },
        {
          path: 'MyBookings',
          element: <MyBookings/>
        },
        // {
        //   path: "proshno",
        //   element: <Proshno/>,
        //   loader: ()=> fetch('/')
        // },
        
       ],
      
    },
]);