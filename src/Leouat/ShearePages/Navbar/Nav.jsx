import { Link } from 'react-router-dom';
import img from '../../../assets/Logo.png'
import { useState } from 'react';

import 'swiper/css';
const Nav = () => {
    const naveling = <>
        <Link>

            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Home</li>
        </Link>
        <Link to={'/listing'}>

            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Pet Listing</li>
        </Link>
      
        <Link>
            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Donation
                Campaigns</li>
        </Link>
        <Link>
            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Login</li>
        </Link>
        <Link>
            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Register</li>
        </Link>






    </>

    const [click, setclick] = useState(false)

    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={img} className="h-8" alt="Flowbite Logo" />
                        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">pets</div>
                    </div>
                    <div className=' md:order-2 '>
                        <button onClick={() => setclick((open) => !open)} className="w-10 ">
                            <img
                                className='rounded-full'
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </button>

                        {click && <div className='absolute'>

                            <h1>dashboard</h1>
                            <h1>logout</h1>
                        </div>


                        }


                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                naveling
                            }
                        </ul>
                    </div>
                </div>
            </nav>







        </div>
    );
};

export default Nav;