import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthConst } from "../../Routs/firebase/Authpovadar/Authpovadar";
import Axscor from "../axseccor/Axscor";

const Useadmins = () => {
    const {user}=useContext(AuthConst)
    const ax = Axscor()
    const { data:isAdmin = [] } = useQuery({
        queryKey: ['isAdmin',user.email],
        queryFn: async () => {
            const res = await ax.get(`/admin/${user.email}`)
            return res.data.admin
        }
    })
  console.log('bbb',isAdmin);
  console.log('uuuu',user.email)
    return [isAdmin]
};

export default Useadmins;