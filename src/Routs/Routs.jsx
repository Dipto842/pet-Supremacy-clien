import { createBrowserRouter } from "react-router-dom";
import Main from "../Leouat/Main";
import Home from "../Leouat/componetn/Pages1/Home";
import Listing from "../Leouat/componetn/Pages1/sechon/listing/listing";
import UserDashboard from "../Leouat/componetn/UserDessbod/UserDashboard";
import Logen from "../Leouat/componetn/LogeinBar/Logen";
import Register from "../Leouat/componetn/LogeinBar/Register/Register";

import Petitels from "../Leouat/componetn/Pages1/sechon/listing/Petitels";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/listing',
            element:<Listing></Listing>
        },

        {
          path:'/logen',
          element:<Logen></Logen>
        },

        {
          path:'/Register',
          element:<Register></Register>
        },
        {
          path:'/petditels/:id',
          loader:({params})=>fetch(`http://localhost:5000/petlist/${params.id}`),
          element:<Petitels></Petitels>,
        }
        
        
        
      
      ]
    },

    {
      path:'userDesbod',
      element:<UserDashboard></UserDashboard>

    }
  ]);

