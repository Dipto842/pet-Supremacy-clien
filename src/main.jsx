import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/Routs';
import Authpovadar from './Routs/firebase/Authpovadar/Authpovadar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authpovadar>
   <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
   </Authpovadar>
  </React.StrictMode>,
)
