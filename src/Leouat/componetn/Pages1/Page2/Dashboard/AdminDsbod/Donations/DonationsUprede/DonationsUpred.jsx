import {  useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Useaxoxpublick from "../../../../../../../../UseHock/Useaxoxpublick";
import { useContext } from "react";
import { AuthConst } from "../../../../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { useLoaderData } from "react-router-dom";



const DonationsUpred = () => {
    const {_id} = useLoaderData()
  




    const { user } = useContext(AuthConst)
    const axus = Useaxoxpublick()

    const {
        register,
        handleSubmit,
       reset,
        formState: { errors }
    } = useForm()











    const onSubmit = (data) => {

        const userinpho = {
            name: data.name,
            maxDonationAmount: data.maxDonationAmount,
            image: data.image,
            donatedAmount: data.donatedAmount,
   

        }
        axus.patch(`/DonationUpred/${_id}`, userinpho)
        
            .then(() => {
                let timerInterval;
                Swal.fire({
                    title: "Your are success",
                    html: "please wait <b></b> milliseconds.",
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                });
                reset()
            })
    }





    return (
        <div>




            <div className="ml-[20rem]">
                <div className=" ml-[350px] font-Dosis font-bold text-[20px]">
                    <h1>Update pet <span className="text-yellow-800">now</span></h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div className="border w-[889px]" >
                        <div className=" grid grid-cols-2 items-center gap-5 w-3/6 mt-6 mx-[10rem] ">
                            <div>
                                {/* 1 */}
                                <h1 className="text-lg font-bold ">Pet name
                                </h1>
                                <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border w-[20rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name"   {...register("name", { required: true })} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                {/* 2 */}
                                <h1 className="ml-24 text-lg font-bold"> maxDonationAmount</h1>
                                <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ml-24 w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="maxDonationAmount"  {...register("age")} required />
                            </div>
                            <div>
                                {/* 3 */}
                                <h1 className="text-lg font-bold">Pet image</h1>
                                <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="image"  {...register("maxDonationAmount")} required />
                            </div>
                            <div>
                                {/* 4 */}
                                <h1 className="ml-24 text-lg font-bold">donatedAmount</h1>
                                <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ml-24 w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  {...register("donatedAmount")} placeholder="donatedAmount" required />
                            </div>

                        </div>

                        <div className=" w-[415px] text-center mt-3 mb-4 mx-auto ml-[18rem]">
                            {/* 8 */}
                            <button className="text-gray-900 bg-gradient-to-r h-[51px] from-teal-200 w-full to-lime-200 hover:bg-gradient-to-l text-[20px] hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Submit</button>


                        </div>

                    </div>

                </form>
            </div>

        </div>
    );
};

export default DonationsUpred;