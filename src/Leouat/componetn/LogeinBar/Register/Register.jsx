import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthConst } from "../../../../Routs/firebase/Authpovadar/Authpovadar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import Useaxoxpublick from "../../../../UseHock/Useaxoxpublick";
import Sosallogin from "./Sosallogin";

const Register = () => {
  const [error, seterror] = useState()

  const {
    register,
    handleSubmit,
    reset

  } = useForm()
  const { singin,userupred } = useContext(AuthConst)
  const Axpublik= Useaxoxpublick()

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data)
    singin(data.email, data.password)

    .then(() => {
       

        userupred(data.displayName,data.photoURL)
        const userinpho={
          name:data.displayName,
          email:data.email
        }
Axpublik.post('/userInpho',userinpho)
.then((res)=>{
  if(res.data.insertedId){
    console.log('user add',data);
    
    reset()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Register success ",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/")
  }
})

        .then(() => {
        
        })
        
        .catch((error) =>  seterror(error.message))
        })
       
      
    
      
    
  }

  // const {singin}=useContext(AuthConst)
  // const hedelrej = (e)=>{
  //   e.preventDefault()
  //   const from = e.target
  //   // const  image = from.image.value
  //   const name = from.name.value
  //   const email = from.email.value
  //   const password = from.password.value

  //   singin(email,password,name)
  //   .then(res=>{
  //                 console.log(res.data)
  //                 alert('ok')
  //             })
  //             .catch(errors=>{
  //                 console.log(errors)
  //                 alert(errors.message)
  //             })
  //             console.log( from.image.value)
  // }
  return (
    <div>
      <div className=" w-[1400px]  flex flex-row-reverse gap-7   justify-center items-center  ml-[19rem] mb-14 mt-24">
        <div className=" w-[1000px] bg-white shadow-2xl border rounded-lg ">
          <div>
            <h1 className="text-2xl w-96 font-bold leading-[135%] mx-auto">
              Welcome to
              <span className="text-[#6358dc]"> Pet adoption Platform </span>
            </h1>

            <Sosallogin></Sosallogin>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" w-96 mx-auto mt-12">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <h1 className="text-[20px] font-bold ">  image</h1>
              <input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" name="photoURL" type="text" placeholder="inter your  image"  {...register("photoURL")} />
            </div>
            <div>
              <h1 className="text-[20px] font-bold "> Name</h1>
              <input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" name="displayName" type="text" placeholder="inter your Name"  {...register("displayName")} />
            </div>
            <div>
              <h1 className="text-[20px] font-bold "> Email</h1>
              <input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" type="email" placeholder="inter your Email" name="email" {...register("email")} />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <h1 className="text-[20px] font-bold ">password</h1>
            <input className="w-full bg-[#ECECEC] text-black rounded-lg font-bold" type="password" placeholder="inter your password" name="password" {...register("password")} />

            <p className="text-black">{error} </p>

            <div className="w-[220px] mx-auto mt-6">
              <button className="mx-auto bg-[#6358dc] mb-6 h-11 rounded-lg font-bold text-white text-2xl  w-full">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;