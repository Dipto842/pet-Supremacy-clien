import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Useaxoxpublick from "../../../../UseHock/Useaxoxpublick";

import { AuthConst } from "../../../../Routs/firebase/Authpovadar/Authpovadar";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Sosallogin = () => {
    const nebekt = useNavigate()
    const Axpublik= Useaxoxpublick()
    const {Goole}=useContext(AuthConst)
    const hendelGoole=()=>{
        Goole()
        .then((data)=>{
console.log('tay',data.user)
const userInpho= {
    email:data.user?.email,
    name:data.user?.displayName
}
Axpublik.post('/userInpho',userInpho)
.then(res=>{
    console.log(res.data)
    alert('ok')
nebekt('/')
    
})
        })

    }
    return (
        <div className="mx-auto w-96 mt-16 ">
        <button onClick={hendelGoole} className="w-[23.75rem] h-[3rem] text-center pt-2 text-[20px] font-bold  shadow-lg border mb-3 rounded-lg">  <FontAwesomeIcon className="" icon={faGoogle} /> Login with Google</button>
        <button className="w-[23.75rem] h-[3rem] text-center pt-2 text-[20px] font-bold  shadow-lg border rounded-lg ">  <FontAwesomeIcon className="mr-2" icon={faGithub} />Login with Github</button>
      </div>
    );
};

export default Sosallogin;