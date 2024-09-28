import axios from "axios";



const Axscor = () => {

 
    const axioxPubll=axios.create({
        baseURL:'http://localhost:5000'
    })
    axioxPubll.interceptors.request.use(function(confirg){
        const token = localStorage.getItem('access-Token')
        confirg.headers.Authorization=`Bearer ${token}`
        return confirg
    },function(error){
        return Promise.reject(error)
    })


    axioxPubll.interceptors.response.use(function(response){
        return response
    },(error)=>{
        const status= error.response.status

        // if(status===401||status===403){
           

        // }

        return Promise.reject(error)
    })
    return axioxPubll
};


export default Axscor;