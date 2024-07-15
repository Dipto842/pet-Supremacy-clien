import { createBrowserRouter } from "react-router-dom";
import Main from "../Leouat/Main";
import Home from "../Leouat/componetn/Pages1/Home";
import Listing from "../Leouat/componetn/Pages1/sechon/listing/listing";


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
        }
      ]
    },
  ]);

