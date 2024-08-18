import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthConst } from "../../../../Routs/firebase/Authpovadar/Authpovadar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Register = () => {
    
//     const {
//         register,
//         handleSubmit,
        
      
//       } = useForm()
//       const {regist}=useContext(AuthConst)
// console.log(regist);

//       const onSubmit = (data) =>{
//         console.log(data)
//         regist(data.email,data.password,)
      
//         .then(res=>{
//             console.log(res.data);
            
//         })
//         .catch(errors=>{
//             console.log(errors.message);
            
//         })
      // }

      const {singin}=useContext(AuthConst)
      const hedelrej = (e)=>{
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const total = { email, password }
        singin(email,password)
        .then(res=>{
                      console.log(res.data);
                      alert('ok')
                  })
                  .catch(errors=>{
                      console.log(errors.message);
                      alert('not ok')
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

            <div className="mx-auto w-96 mt-16 ">
              <h1 className="w-[23.75rem] h-[3rem] text-center pt-2 text-[20px] font-bold  shadow-lg border mb-3 rounded-lg">  <FontAwesomeIcon className="" icon={faGoogle} /> Login with Google</h1>
              <h1  className="w-[23.75rem] h-[3rem] text-center pt-2 text-[20px] font-bold  shadow-lg border rounded-lg ">  <FontAwesomeIcon className="mr-2" icon={faGithub} />Login with Github</h1>
            </div>
          </div>
             <form onSubmit={hedelrej} className=" w-96 mx-auto mt-12">
      {/* register your input into the hook by invoking the "register" function */}
<div>
 <h1 className="text-[20px] font-bold "> Name</h1>
<input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" name="name" type="text" placeholder="inter your Name"  />
</div>
<div>
 <h1 className="text-[20px] font-bold "> Email</h1>
<input className="w-full mb-7 bg-[#ECECEC] text-black rounded-lg font-bold" type="email" placeholder="inter your Email"name="email" />
</div>

      {/* include validation with required or other standard HTML validation rules */}
      <h1  className="text-[20px] font-bold ">password</h1>
      <input className="w-full bg-[#ECECEC] text-black rounded-lg font-bold" type="password" placeholder="inter your password" name="password" />
    
    

     <div className="w-[220px] mx-auto mt-6">
     <button className="mx-auto bg-[#6358dc] mb-6 h-11 rounded-lg font-bold text-white text-2xl  w-full">Login</button>
     </div>
    </form>
        </div>
        </div>
        </div>
    );
};

export default Register;