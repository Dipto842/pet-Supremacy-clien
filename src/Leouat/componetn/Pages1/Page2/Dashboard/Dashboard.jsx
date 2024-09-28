import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    const admin = true
    const [menu ,setmenu]=useState(true)

    console.log(menu);
    
    const hedlemunu=()=>{
        setmenu(true)

        
    }
    const hendelclos=()=>{
        setmenu(false)
        
    }
    return (
       
      <div>
         {
            menu ? <button   onClick={hendelclos}><FontAwesomeIcon className="ml-5 text-[25px] "  icon={faXmark}></FontAwesomeIcon></button>:  <button  onClick={hedlemunu}><FontAwesomeIcon className="ml-5 text-[25px] delay-300 " icon={faBars}></FontAwesomeIcon></button>
        }
          <div className="flex  ">
         
           
           
         <div className="w-1/6  ">
             {/* Sidebar */}



             <nav className={`${!menu ? 'hidden delay-300  h-[500rem]  ':" bg-black rounded-xl "}`}>
                
                {
                    admin ? <>
                     <ul className=" animate__animated animate__backInLeft h-[500rem] pt-4">
                     <NavLink to={'Alluser'}><li className=" text-center text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">All User</li></NavLink>
                     <NavLink to={'Allpat'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">All Pets</li></NavLink>
                     <NavLink to={'Donation'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">All Donations</li></NavLink>
                     
                     <NavLink to={'/'} ><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</li></NavLink>

                
                 </ul>
                    </>: <>
                    <ul className=" animate__animated animate__backInLeft h-[500rem] pt-4">
                    <NavLink to={'Add'}><li className=" text-center text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add a pet</li></NavLink>
                     <NavLink to={'myAdd'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">My added pets</li></NavLink>
                     <NavLink to={'Adoption'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Adoption Request</li></NavLink>
                     <NavLink to={'Create'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Donation Campaign</li></NavLink>
                     <NavLink to={'Mydonation'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">My Donation Campaigns</li></NavLink>
                     <NavLink to={'/UserDasbod'}><li className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">My Donations</li></NavLink>
                 </ul>
                    </>
                }
                <div className="text-white bg-red-700 w-36">
                    <p>s</p>
                </div>
             </nav>
                

         </div>

         <div className="mt-20 ">

             <Outlet></Outlet>
         </div>
     </div>
      </div>
    );
};

export default Dashboard;
