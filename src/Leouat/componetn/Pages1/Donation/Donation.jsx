import { useEffect, useState } from 'react';

import fackdata from '../../../../../public/data.json'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Axscor from '../../../../UseHock/axseccor/Axscor';
import { useQuery } from '@tanstack/react-query';
import { list } from 'postcss';

const Donation = () => {
    const [data, setData] = useState([])
    const [litm, setlit] = useState([])

    const [pets, setPets] = useState([])
    const [hasMore, setHasMore] = useState(true)

    const ax = Axscor()

    useEffect(() => {
        fetch(`http://localhost:5000/Donation`)
            .then(res => res.json())
            .then(lode => {
                console.log('amijjjjjjjjjj', lode);

                setData(lode)
            })

    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/paymentIntentinph`)
            .then(res => res.json())
            .then(lode => {
                console.log('amsssssssssss', lode);
            setlit(lode)
                
            })

    }, [])

  
    console.log('amsssssssssss', litm);
 








    setTimeout(() => {
        const newpet = data
            .sort((a, b) => new Date(a.date) - new Date(b.date))

        console.log('gg', newpet)
        setPets(newpet)
        if (newpet.length === 0) {
            setHasMore(false)
            return
        }




    })
  

    return (
        <div>
            <InfiniteScroll
                dataLength={pets.length}

                hasMore={hasMore}
                loader={

                    <div className="flex items-center text-center mx-auto justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                    </div>
                }
            >

                <div className='grid lg:grid-cols-3 max-w-screen-xl mx-auto gap-7 mt-8 '>
                    {
                        pets.map((item, index) => <div key={item._id}>

                            <div className=" h-[415px] items-center mb-36 bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700 ">
                                <div >
                                    <img className=" rounded-lg mx-auto mt-1  h-60" src={item.img} alt="product image" />
                                </div>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.Name}</h5>
                                    </a>
                                    <div className="flex  items-center mt-3 mb-3">
                                        <div className="flex items-center rtl:space-x-reverse">

                                        </div>
                                        <span className="bg-blue-100 text-blue-800  font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 text-[15px] "> maxDonationAmount : {item.amount}</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className=" bg-blue-100 text-blue-800  font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 text-[15px]">donatedAmount : 
                                                         
                                                         
                                                         </span>
                                        <Link to={`/Donation_Ditels/${item._id}`}> <button href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donation details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )


                    }
                      {
                                                                litm.map(list=><p>{list.paymentIntentamount}</p>)
                                                            }
                                                         </div>
                 <div>
                                                          
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Donation;