import { useEffect, useState } from 'react';
import fackdata from '../../../../../public/data.json'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const Donation = () => {
    const [data ,setData]=useState([])
    const [page, setpage] = useState(0)
    const [pets, setPets] = useState([])
    const [hasMore, setHasMore] = useState(true)

  
  useEffect(()=>{
        fetch(`http://localhost:5000/Donation`)
        .then(res=>res.json())
        .then(lode=>{
            console.log('amijjjjjjjjjj',lode);
            
            setData(lode)
        })
        
    },[])
 

    useEffect(() => {
        fetchMoreData()
    }, [])

    console.log('gg',data)

    const fetchMoreData = () => {

        const itempages = 4
        setTimeout(() => {
            const newpet = data
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(page * itempages, (page + 1) * itempages)

            if (newpet.length === 0) {
                setHasMore(false)
                return
            }

            setPets((prevPets) => [...prevPets, ...newpet])
            setpage(page + 1);
        }, 1500)
    }
    return (
        <div>
            <InfiniteScroll
                dataLength={pets.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >

             <div className='grid lg:grid-cols-3 max-w-screen-xl mx-auto gap-7 mt-8 '>
             {
                    pets.map((item,index) => <div key={index}>
                        {console.log(item._id)
                        }
                        <div className=" h-[415px] items-center mb-36 bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div >
                                <img className=" rounded-lg mx-auto mt-1  h-60" src={item.petImage} alt="product image" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.petName}</h5>
                                </a>
                                <div className="flex  items-center mt-3 mb-3">
                                    <div className="flex items-center rtl:space-x-reverse">

                                    </div>
                                    <span className="bg-blue-100 text-blue-800  font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 text-[15px] "> maxDonationAmount : {item.maxDonationAmount}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className=" bg-blue-100 text-blue-800  font-semibold  py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 text-[15px]">donatedAmount : {item.donatedAmount}</span>
                                    <Link to={`/Donation_Ditels/${item._id}`}> <button href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donation details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
               
                    
                }
             </div>
            </InfiniteScroll>
        </div>
    );
};

export default Donation;