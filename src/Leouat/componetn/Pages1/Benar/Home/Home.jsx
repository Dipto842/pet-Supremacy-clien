import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthConst } from "../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { useQuery } from "@tanstack/react-query";

import Axscor from "../../../../../UseHock/axseccor/Axscor";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'



const Home = () => {
  
    // const [data, setData] = useState([])
    const [selektpet, setselektpet] = useState('All')
    const ax= Axscor()

    const { data = [],refetch ,isPending } = useQuery({
        queryKey: ['card'],
        queryFn: async ()=>{
            const res = await ax.get('/petlist')
            return res.data
        }
        
    })
    console.log('a', selektpet)
if(isPending) return <div className="w-56 text-center mx-auto mt-20">  <SkeletonTheme className={'w-52'} circle={'50%'} highlightColor="#444">
<p>
  <Skeleton count={3} />
</p>
</SkeletonTheme></div>


    const sotdet = [...data].sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
    const filtar = sotdet.filter(animel =>
        (selektpet === 'All' || animel.Category === selektpet)
    )
  
    console.log('a', )
    return (
        <div>
            <div className='text-center mt-36'>

                <select
                    value={selektpet}
                    onChange={e => setselektpet(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Fish">Fish</option>
                    <option value="bird">bird</option>

                </select>
            </div>
            <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto gap-7 mt-8 ">
                { 
                    filtar.map(list => <div key={list._id}>

                        <div className=" h-[415px] items-center mb-36 bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div >
                                <img className=" rounded-lg mx-auto mt-1  h-60" src={list.image} alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{list.name}</h5>
                                </a>
                                <div className="flex  items-center mt-3 mb-3">
                                    <div className="flex items-center rtl:space-x-reverse">

                                    </div>
                                    <span className="bg-blue-100 text-blue-800  font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 text-[15px] "> location : {list.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">age : {list.age}</span>
                                    <Link to={`/petditels/${list._id}`}> <button href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pet Details</button></Link>
                                </div>
                            </div>
                        </div> 


                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;