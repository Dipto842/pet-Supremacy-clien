import axios from "axios";


const Axpublick = () => {
    const axioxPubll=axios.create({
        baseURL:'https://b9-battle-for-supremacy-sarvar.vercel.app'
    })
    return axioxPubll
};

export default Axpublick;