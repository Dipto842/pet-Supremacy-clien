import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase.config";
import Axscor from "../../../UseHock/axseccor/Axscor";
import Axpublick from "../../../UseHock/Axpublik/Axpublick";



export const AuthConst = createContext(null)

const Authpovadar = ({children}) => {
const ax =Axpublick()
const [user , setuser]=useState([])
const [loding ,setloding]=useState(true)
const provider = new GoogleAuthProvider();
const Goole = ()=>{
  return  signInWithPopup(auth, provider)
}

const singin =  (email, password)=>{
  return  createUserWithEmailAndPassword(auth,email, password)
}


  const logein = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

const out = ()=>{
  return  signOut(auth)
}


const userupred=(displayName,photoURL)=>{
  return  updateProfile(auth.currentUser, {
        displayName: displayName, photoURL:photoURL
      
    })
}

useEffect(()=>{
 const undefen =  onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
const userinpho= {
  email:currentUser.email
}
if(currentUser){
ax.post('/jwt',userinpho)
.then(res=>{
  if(res.data.token){
    localStorage.setItem('access-Token',res.data.token)
  }
})
}
else{
  localStorage.removeItem('access-Token')
}
console.log(user);

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
        out,
        userupred,
        Goole
    }
    return (
        <AuthConst.Provider value={authinfo}>
            {children}
        </AuthConst.Provider>
    );
};

export default Authpovadar;