import axios from "axios";


const Axpublick = () => {
    const axioxPubll=axios.create({
        baseURL:'http://localhost:5000'
    })
    return axioxPubll
};

export default Axpublick;