import { useQuery } from "@tanstack/react-query";
import Axscor from "../../../../../../UseHock/axseccor/Axscor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";





const AllUser = () => {
  
    const ax = Axscor()
    const { isPending, error, data = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await ax.get('/userInpho',{
                headers:{
                    Authorization:`Benar ${localStorage.getItem('access-Token')}`
                }
            })
            return res.data
        }
    })

    const hendeladmin = async(list) => {
    
     Swal.fire({
        title: "Are you sure?",
        text: `Can you admin ${list.name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result) => {
        if (result.isConfirmed) {
            const res=await ax.patch(`/admin/${list._id}`)
            refetch()
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    title: "success!",
                    text: `Your  new Admin ${list.name} `,
                    icon: "success"
                  });
            }
          
        }
      });
      
 
     
           
        }

    return (
        <div className="">
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
                                    <td className="rounded-full">
                                        <img className="rounded-full w-14" src={list.image} alt="" />
                                    </td>

                                    <td className="px-6 py-4 font-medium">
                                        <h1>{list.name}</h1>
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        {list.email
                                        }
                                    </td>




                                    <td className="">
                                        {
                                            list.role==='admin' ? <><FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon> <span>Admin</span></> : <button onClick={() => hendeladmin(list)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" > <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Make Admin</button>
                                        }
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

export default AllUser;