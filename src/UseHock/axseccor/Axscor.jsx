import axios from "axios";


const Axscor = () => {
    const axioxPubll=axios.create({
        baseURL:'http://localhost:5000'
    })
    return axioxPubll
};


export default Axscor;