import { createBrowserRouter } from "react-router-dom";
import Main from "../Leouat/Main";
import Home from "../Leouat/componetn/Pages1/Home";
import Listing from "../Leouat/componetn/Pages1/sechon/listing/listing";

import Logen from "../Leouat/componetn/LogeinBar/Logen";
import Register from "../Leouat/componetn/LogeinBar/Register/Register";

import Petitels from "../Leouat/componetn/Pages1/sechon/listing/Petitels";
import About from "../Leouat/componetn/Pages1/Akstachechon/About/About";

import Donation from "../Leouat/componetn/Pages1/Donation/Donation";
import Ditels from "../Leouat/componetn/Pages1/Donation/Donation-Ditels/Ditels";
import Dashboard from "../Leouat/componetn/Pages1/Page2/Dashboard/Dashboard";
import Admin from "../Leouat/componetn/Pages1/Page2/Dashboard/AdminDsbod/Admin";
import Add from "../Leouat/componetn/Pages1/Page2/Dashboard/userAdd/Add";
import MyAdd from "../Leouat/componetn/Pages1/Page2/Dashboard/userAdd/myAdd/myAdd";
import Update from "../Leouat/componetn/Pages1/Page2/Dashboard/userAdd/myAdd/Update/Update";
import Create from "../Leouat/componetn/Pages1/Page2/Dashboard/userAdd/Create/Create";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listing',
        element: <Listing></Listing>
      },

      {
        path: '/logen',
        element: <Logen></Logen>
      },

      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/petditels/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/petlist/${params.id}`),
        element: <Petitels></Petitels>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/Donation',
        element: <Donation></Donation>,
        // loader: fetch('http://localhost:5000/Donation')

      },
      {
        path: '/Donation_Ditels/:id',
        // loader:({params})=>fetch(`http://localhost:5000/Donation/${params.id}`),
        element: <Ditels></Ditels>
      },





    ]
  },
  {
    path: 'Dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'Add',
        element: <Add></Add>
      },
      {
        path: 'myAdd',
        element: <MyAdd></MyAdd>,

      },
      {
        path: 'Create',
        element: <Create></Create>

      },
      {
        path: 'Update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/petlis/${params.id}`)

      }
    
    ]
  },
  {
    path: 'Admin',
    element: <Admin></Admin>,
    children: [
      {

      }
    ]
  }



]);

