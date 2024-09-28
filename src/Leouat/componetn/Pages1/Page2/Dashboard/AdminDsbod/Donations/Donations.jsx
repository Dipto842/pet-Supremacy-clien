import { useQuery } from "@tanstack/react-query";
import Axscor from "../../../../../../../UseHock/axseccor/Axscor";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPenToSquare, faTrash, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";


const Donations = () => {
    const [Pause, setPause]=useState(true)
    const ax = Axscor()
    const { isPending, error, data = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await ax.get('/Donation')
            return res.data
        }

    })
    const HendelPause=(e)=>{
        const Paus= false
        setPause(Paus)
    }
    const HendelunPause=()=>{
        const Paus= true
        setPause(Paus)
    }

    
    const hendelDelet = (_id) => {




        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await ax.delete(`/deletdonechon/${_id}`)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            refetch()
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
                                <th></th>

                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Maximum amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                donatedAmount
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
                                        <img className="rounded-full w-16 h-16" src={list.petImage} alt="" />
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        <h1>{list.
                                            petName}</h1>
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        {list.
                                            maxDonationAmount
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center font-medium">
                                            {list.donatedAmount}
                                        </div>
                                    </td>
                                    <td className=" " >
                                        <Link to={`/Dashboard/DonationUpred/${list._id}`}>  <button data-tooltip-target="tooltip-light" data-tip="hello" className=" tooltip tooltip-open tooltip-bottom text-white bg-gradient-to-r  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button></Link>

                                    </td>

                                    <td  className="">
                                     {Pause ?    <Link> <button onClick={HendelPause} className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-400 shadow-lg shadow-black-200 dark:shadow-lg dark:shadow-black-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon className="" icon={faPause}></FontAwesomeIcon></button></Link>:    <Link> <button onClick={HendelunPause} className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-yellow-400 shadow-lg shadow-black-200 dark:shadow-lg dark:shadow-black-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FontAwesomeIcon className="" icon={faUpLong}></FontAwesomeIcon></button></Link>}
                                    </td>
                                    <td className="">
                                    <td className="">
                                        <button onClick={()=>hendelDelet(list._id)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" > <FontAwesomeIcon icon={faTrash}>  </FontAwesomeIcon> <span>Delete</span> </button>
                                    </td>
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

export default Donations;