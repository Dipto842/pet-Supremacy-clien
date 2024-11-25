    
import { Typography } from "@material-tailwind/react";
import { Box,  } from "@mui/material";

import { useLoaderData } from "react-router-dom";


import Modal from '@mui/material/Modal';
import React, { useContext } from "react";
import { AuthConst } from "../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Card pement/CheckoutForm";
import Swal from "sweetalert2";




const stripePromise = loadStripe('pk_test_51PZaoq2NKg56s1Fe0zmbQB4LDL18Jf27Q5ckOJ9OnrBI4sI6gGi63wXsM1pyKNWpNxPqqizhHavvHYOOG6mxJh4z005B6ZL1pt')

const Ditels = () => {


const {user}=useContext(AuthConst)
    const data = useLoaderData()


    const { amount, img, Name, date, Short, Long,Pause  } = data

    const styled = {
        position: 'absolute' , 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        
      };
   
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
    
        // const hedelsubmit=(e)=>{
        //     e.preventDefault()
        //     const from = e.target
        //     const Name = from.Name.value
        //     const Email = from.Email.value
        //     const Nambar = from.number.value
        //     const Address = from.Address.value,
        //     UserEmali=user.email
        //     const total = {Name,Email,Nambar,Address,UserEmali}
        //     console.log(Name,Email, Address,Nambar)

        //     fetch('https://b9-battle-for-supremacy-sarvar.vercel.app/petadot',{
        //         method:'POST',
        //         headers:{
        //             'content-type':'application/json'
        //         },
        //         body:JSON.stringify(total)
        //     })
            
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))
        // }

       
       const HendelunPause=()=>{
        
         
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Donation has been kept off due to some problem. Please try again sometime",
          
          });
       }
    
    return (
        <div>
               <div className=" w-[50%] mt-48 mx-auto">

<h1 className="flex  flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  font-semibold">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex  gap-6 text-[20px]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {Name}</h5>
            <h1>  {date}</h1>
        </div>
      
        <div className="flex gap-10">
            <h1 className=" ">amount: {amount}</h1>
           
        </div>
        <div>
{
Long ?    <p className=" font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Long description:</span> <span className="text-[14px]"></span> {Long}</p> :  <p className=" font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Short description:</span> <span className="text-[14px]"></span> {Short}</p>

}



</div>


       {
Pause ?  <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none mt-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpen}> Donate now</button> : <button onClick={HendelunPause } className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none mt-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" > Donate now</button> 
       }
<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"

>
<Box className='lg:w-[1000px]' sx={styled}>

<Typography id="modal-modal-description" sx={{ mt: 2 }}>
<div>
<div>


<div className=" md:w-[450px] sm:max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
<img className="rounded-t-lg" src={img} alt="" />
</a>
<div className="p-5">
<a href="#">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Name}</h5>
</a>
<div>


<div className=" lg:w-96 sm:w-[50%] sm:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
{/* Card pement */}

<div>

</div>

<Elements stripe={stripePromise}>
      <CheckoutForm data={data}></CheckoutForm>
    </Elements>
</div>

</div>

</div>
</div>

</div>
</div>
</Typography>
</Box>
</Modal>
                
           
        

    </div>

</h1>
</div>
        </div>
    );
};

export default Ditels;