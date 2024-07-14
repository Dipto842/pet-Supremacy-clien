import img1 from '../../../../assets/AdobeStock_233995940_Preview.jpeg'
import img2 from '../../../../assets/AdobeStock_512789201_Preview.jpeg'
import img3 from '../../../../assets/AdobeStock_323070505_Preview.jpeg'
import img4 from '../../../../assets/AdobeStock_476874526_Preview.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';

const Benar = () => {
    return (
        <div>
            <section className='flex max-w-screen-xl justify-center mx-auto mt-14 '>
    <div className='bg-[#1c4a2a] w-1/2 '>

<p className='text-[30px] text-white font-medium text-center mt-28 font-Dosis  '>
Embrace Endless Love with Your New Furry Best Friend.
 
 Adopt now and start creating unforgettable memories together.
</p>
<p className=' text-white mt-6 ml-16'> There are likely hundreds of adoptable cats and dogs in your local animal shelters or rescues right now who would love to join your family.</p>
    </div>

    <div className='w-1/2'>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
     
    >
      <SwiperSlide> <img src={img1} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={img3} alt="" /></SwiperSlide>
      <SwiperSlide> <img src={img4} alt="" /></SwiperSlide>
    
    </Swiper>

    </div>
</section>
        </div>
    );
};

export default Benar;