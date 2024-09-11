import { useContext } from "react";
import { AuthConst } from "../../../Routs/firebase/Authpovadar/Authpovadar";
import { useForm } from "react-hook-form"
import img from '../../../assets/Illustration.png'

import { Link } from "react-router-dom";
import Sosallogin from "./Register/Sosallogin";





const Logen = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const { logein } = useContext(AuthConst)

  const onSubmit = (data) => {
    console.log(data)
    logein(data.email, data.password)
      .then(res => {
        console.log(res), alert('ok')
        
      })

      .catch(error => {
        console.log(error), alert('not ok')
      })
  }


  return (
    <div>
      <div className=" w-[1400px]  flex flex-row-reverse gap-7   justify-center items-center ml-16 mb-14 mt-32">
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
              <h1 className="text-[20px] font-bold "> Email</h1>
              <input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" type="text" placeholder="inter your Email" {...register("email")} />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <h1 className="text-[20px] font-bold ">password</h1>
            <input className="w-full bg-[#ECECEC] text-black rounded-lg font-bold" type="password" placeholder="inter your password" {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="w-[220px] mx-auto mt-6">
              <button className="mx-auto bg-[#6358dc] mb-6 h-11 rounded-lg font-bold text-white text-2xl  w-full">Logen</button>
            </div>
          </form>
          <div className="text-center">
            Don’t have an account? <Link to={'/Register'}>Register</Link>
          </div>
        </div>

        <div >
          <img className="w-[800px]" src={img} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Logen;