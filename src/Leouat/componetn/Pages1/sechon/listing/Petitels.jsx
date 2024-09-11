
import { Typography } from "@material-tailwind/react";
import { Box,  } from "@mui/material";

import { useLoaderData } from "react-router-dom";


import Modal from '@mui/material/Modal';
import React from "react";





const Petitels = () => {


    const data = useLoaderData()
console.log(data);

    const { name, age, location, category, image, dateAdded, adopted ,Long,Short } = data

    const styled = {
        position: 'absolute' , 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
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
    
        const hedelsubmit=(e)=>{
            e.preventDefault()
            const from = e.target
            const Name = from.Name.value
            const email = from.email.value
            const Nambar = from.number.value
            const Address = from.Address.value
            const total = {Name,email,Nambar,Address}
            console.log(Name,Address,Nambar,email,)

            fetch('http://localhost:5000/petadot',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(total)
            })
            
            .then(res=>res.json())
            .then(data=>console.log(data))
        }

       
       
    

    return (
        <div className=" w-[27%] mt-48 mx-auto">

            <h1 className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  font-semibold">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="flex  gap-6 text-[20px]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {name}</h5>
                        <h1>  {category}</h1>
                    </div>
                    <div className="flex gap-9 mb-2">
                        <p className=" font-normal text-gray-700 dark:text-gray-400">Adopted: {adopted ? 'Adopted' : 'Not Adopted'}</p>
                        <h1> location: {location}</h1>
                    </div>
                    <div className="flex gap-10">
                        <h1 className=" ">Date: {dateAdded}</h1>
                        <h1 >Age: {age}</h1>
                    </div>
                    <div>
        {
            Long ?    <p className=" font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Long description:</span> <span className="text-[14px]"></span> {Long}</p> :  <p className=" font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Short description:</span> <span className="text-[14px]"></span> {Short}</p>
           
        }
         

            
        </div>


                    <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none mt-3 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpen}> adopt</button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={styled}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <div>
           <div>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
       <div>
        

<div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6 " onSubmit={hedelsubmit} action="#">
       
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" name="Name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Nambar</label>
            <input type="number" placeholder='number' name="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
            <input type="" name="Address" id="password" placeholder="Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
       

        <div className="flex items-start">
            <div className="flex items-start">
               
             
            </div>
           
       <div>
        <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
       </div>
        </div>
       
    </form>
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

    )

};

export default Petitels;