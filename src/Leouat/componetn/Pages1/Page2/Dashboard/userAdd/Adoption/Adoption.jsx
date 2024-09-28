import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthConst } from "../../../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { Link, useLoaderData } from "react-router-dom";

import Axscor from "../../../../../../../UseHock/axseccor/Axscor";


const Adoption = () => {
    const { user } = useContext(AuthConst)
    const ax = Axscor()

    const datat=useLoaderData()
    
    const { isPending, error, data = [], refetch } = useQuery({
        queryKey: ['petadop'],
        queryFn:async () =>{
            const res = await ax.get(`/petadot/${Email}`)
            return res.data
        }
            
           


  
})
console.log(datat.length);

    return (
        
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-[12rem]">
                <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">


                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th></th>

                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-8 py-3">
                                email
                                </th>
                                <th scope="col" className="px-6 py-3">
                               numbe
                                </th>
                                <th scope="col" className="px-6 py-3">
                                location
                                </th>
                                <th>

                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((list, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="text-[18px] font-semibold">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4 font-medium">
                                        <h1>{list.Name}</h1>
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        {list.Email
                                        }
                                    </td>
                                    <td className="px-8+ py-4">
                                        <div className="flex items-center font-medium">
                                            {list.Nambar }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 " >
                                        <Link to={`/Dashboard/Update/${list._id}`}>  <p className="flex items-center font-medium">{list.Address} </p></Link>

                                    </td>

                                 
                                    <td className="">
                                       <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >accept</button> 
                                         
                                    </td>
                                    <td className="">
                                       <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >accept</button> 
                                         
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>



                </div>
            </div>
        </div>
    );
};

export default Adoption;