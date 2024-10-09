import axios from "axios";



const Axscor = () => {

 
    const axioxPubll=axios.create({
        baseURL:'https://b9-battle-for-supremacy-sarvar.vercel.app'
    })
    axioxPubll.interceptors.request.use(function(confirg){
        const token = localStorage.getItem('access-Token')
        confirg.headers.Authorization=`Benar ${token}`
        return confirg
    },function(error){
        return Promise.reject(error)
    })


    axioxPubll.interceptors.response.use(function(response){
        return response
    },async (error)=>{
        

        // if(status===401||status===403){
           

        // }

        return Promise.reject(error)
    })
    return axioxPubll
};


export default Axscor;