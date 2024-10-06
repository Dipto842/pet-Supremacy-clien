import { useContext } from "react";
import { AuthConst } from "../../../../../../../Routs/firebase/Authpovadar/Authpovadar";
import { Controller, useForm } from "react-hook-form";
import { Select } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Useaxoxpublick from "../../../../../../../UseHock/Useaxoxpublick";
import Swal from "sweetalert2";

const imgUplod =import .meta.env.VITE_IMG_UPLOD
const imgapi = `https://api.imgbb.com/1/upload?key=${imgUplod}`
const Create = () => {
    const {user}=useContext(AuthConst)
const ax = Useaxoxpublick()
    const {
        register,
        handleSubmit,
       
        formState: { errors }
    } = useForm()

    const onSubmit = async(data) => {
        
      
        const userimg={
            image:data.image[0]
        }

        const res = await ax.post(imgapi,userimg,{
            headers: {
                "content-type": "multipart/form-data"
              }
              
        })
        console.log(res.data);
      if(res.data.success){
        const userinpho = {
            img:res.data.data.display_url,
            amount:data.amount,
           
            Name:data.Nmae,
            date:data.date,
            location:data.location,
            
            Short:data.Short,
            Long:data.Long,
            email:user.email,
            Pause:true,
            price:0,
            paymentIntentName:null,
            paymentIntentEmail:null,
            paymentIntentDate:null,

           
           
        }
      
        const ress = await ax.post('/Donation',userinpho)
        console.log(ress.data);
        if(ress.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Donation has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Donation has been not saved",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
       
      }
      
    }


   


 
    return (
        <div>
         <div className="ml-[20rem]">
            <form onSubmit={handleSubmit(onSubmit)}>



                <div className="border w-[889px]" >
                    <div className=" grid grid-cols-2 items-center gap-5 w-3/6 mt-6 mx-[10rem] ">
                        <div>
                            {/* 1 */}
                            <h1 className="text-lg font-bold ">Name
                            </h1>
                            <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border w-[20rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"   {...register("Nmae",{required:true})} />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div>
                            {/* 2 */}
                            <h1 className="ml-24 text-lg font-bold">Last date</h1>
                            <input type="date" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ml-24 w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="age"  {...register("date")} required />
                        </div>
                        <div className="">
                            {/* 3 */}
                            <h1 className="text-lg font-bold">Maximum amount</h1>
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="amount"  {...register("amount")} required />
                        </div>
                       
                        <div className="">
                            {/* 3 */}
                            <h1 className="text-lg font-bold ml-24">Pet image</h1>
                            <input type="file" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-24  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[20rem]" placeholder="image"  {...register("image")} required />
                        </div>
                     
                        
                    </div>
                    <div className=" mx-[10rem] w-[20rem]">
                        <div  >
                            {/* 6 */}
                            <h1></h1>

                            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white ">Short description</label>
                            <textarea  {...register("Short")} id="message" rows="4" className="block p-2.5 w-[670px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description..."></textarea>

                        </div>
                        <span><FontAwesomeIcon className="ml-[294px] text-orange-400 mt-6" icon={faArrowUp}></FontAwesomeIcon></span>
                        <span className="text-center ml-[290px] text-orange-400">OR</span>
                        <span><FontAwesomeIcon className="ml-[296px] text-orange-400 " icon={faArrowDown}></FontAwesomeIcon></span>
                        <div>
                            {/* 7 */}
                            <h1></h1>
                            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Long description</label>
                            <textarea  {...register("Long")} id="message" rows="4" className="block p-2.5 w-[670px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Long description..."></textarea>
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

export default Create;