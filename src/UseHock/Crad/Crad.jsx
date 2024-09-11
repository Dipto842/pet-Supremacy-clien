import {  useQuery } from "@tanstack/react-query";
import { AuthConst } from "../../Routs/firebase/Authpovadar/Authpovadar";
import { useContext } from "react";
import Useaxoxpublick from "../Useaxoxpublick";


const Crad = () => {
    const axus = Useaxoxpublick()
    const {user}=useContext(AuthConst)
    const { isPending, error, data: cs =[] ,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn:async () =>{
         const res=await   axus.post('/petlist')
      
            
         return res.data
    }
      })
 return {cs}
}


export default Crad;