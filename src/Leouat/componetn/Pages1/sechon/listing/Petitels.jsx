
import { Typography } from "@material-tailwind/react";
import { Box,  } from "@mui/material";

import { useLoaderData } from "react-router-dom";


import Modal from '@mui/material/Modal';
import React from "react";




const Petitels = () => {

    const data = useLoaderData()

    const { name, age, location, category, image, dateAdded, adopted } = data

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
                        <h1>Date: {dateAdded}</h1>
                        <h1>Age: {age}</h1>
                    </div>



                    <button onClick={handleOpen}>Open modal</button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={styled}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
                            
                       
                    

                </div>

            </h1>
        </div>

    )

};

export default Petitels;