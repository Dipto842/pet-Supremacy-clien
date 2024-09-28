import { useQuery } from "@tanstack/react-query";
import Axscor from "../../../../../../../UseHock/axseccor/Axscor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AllPat = () => {
    const ax = Axscor()
    const { data = [] ,refetch} = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await ax.get('/petlist')
            return res.data
        }
    })

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
                    await ax.delete(`/petlist/${_id}`)
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
                                    email
                                </th>
                                <th scope="col" className="px-6 py-3">

                                    Category
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
                                        <img className="rounded-full w-16 h-16" src={list.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        <h1>{list.name}</h1>
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        {list.email
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center font-medium">
                                            {list.
                                                Category}
                                        </div>
                                    </td>



                                    <td className="">
                                        <button onClick={()=>hendelDelet(list._id)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" > <FontAwesomeIcon icon={faTrash}>  </FontAwesomeIcon> <span>Delete</span> </button>
                                    </td>

                                    <td className="">
                                       <Link to={`/Dashboard/Update/${list._id}`}> <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" ><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> update </button></Link>
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

export default AllPat;