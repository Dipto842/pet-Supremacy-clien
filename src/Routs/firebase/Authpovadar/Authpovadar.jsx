import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase.config";


export const AuthConst = createContext(null)

const Authpovadar = ({children}) => {

const [user , setuser]=useState([])
const [loding ,setloding]=useState(true)


const singin =  (email, password)=>{
  return  createUserWithEmailAndPassword(auth,email, password)
}


  const logein = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

const out = ()=>{
    signOut(auth)
}


useEffect(()=>{
 const undefen =  onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
console.log('carenuser',currentUser);

    })
    return ()=>{
        return  undefen()
    }
        
    
},[])


    const authinfo = {
        user,
        loding,
        logein,
        singin,
        out
    }
    return (
        <AuthConst.Provider value={authinfo}>
            {children}
        </AuthConst.Provider>
    );
};

export default Authpovadar;