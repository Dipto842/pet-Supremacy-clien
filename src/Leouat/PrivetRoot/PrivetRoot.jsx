import { useContext } from "react";
import { AuthConst } from "../../Routs/firebase/Authpovadar/Authpovadar";
import { Navigate } from "react-router-dom";


const PrivetRoot = ({childen}) => {
    const {user}=useContext(AuthConst)
    if(user){
        return childen
    }
    return <Navigate to={'/logen'}></Navigate> ;
};

export default PrivetRoot;