import { useQuery } from "@tanstack/react-query";
import { AuthConst } from "../../../../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPause, faPlay, faUpLong } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Axscor from "../../../../../../../../UseHock/axseccor/Axscor";


const MyDonation = () => {
    const ax = Axscor()

    const { user } = useContext(AuthConst)
    const { isPending, error, data = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            
            const res = await ax.get(`/Donation/${user.email}`)
            return res.data
        }
          


      


    })
    refetch()
    if (isPending) return <div className=" mx-auto flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    if (error) return console.log(error);
    const HendelPause = (list) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to keep the donation is off ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await ax.patch(`/Pause/${list._id}`)
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "success!",
                        text: `donation is off?  `,
                        icon: "success"
                    });
                }

            }
        });

    }
    const HendelunPause = (list) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to keep the donation is on ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await ax.patch(`/unPause/${list._id}`)
                refetch()
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "success!",
                        text: ` donation is on? ? `,
                        icon: "success"
                    });
                }

            }
        });
    }
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
                                <th scope="col" className="px-6 py-3">
                                    Maximum amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Adoption
                                </th>
                                <th>

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
                                        {list.amount
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center font-medium">
                                            {list.adopted ? 'isAdopted' : 'No Adopted'}
                                        </div>
                                    </td>
                                    <td className=" " >
                                        <Link to={`/Dashboard/Update/${list._id}`}>  <button data-tooltip-target="tooltip-light" data-tip="hello" className=" tooltip tooltip-open tooltip-bottom text-white bg-gradient-to-r  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button></Link>

                                    </td>

                                    <td className="">
                                        {list.Pause ? <Link> <button onClick={() => HendelPause(list)} className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-400 shadow-lg shadow-black-200 dark:shadow-lg dark:shadow-black-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon className="" icon={faPause}></FontAwesomeIcon></button></Link> : <Link> <button onClick={() => HendelunPause(list)} className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-400 shadow-lg shadow-black-200 dark:shadow-lg dark:shadow-black-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon className="" icon={faPlay}></FontAwesomeIcon></button></Link>}
                                    </td>
                                    <td className="">
                                        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >View Donators</button>
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

export default MyDonation;