import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/css/Swiper.css'
import React from 'react'

// SWIPER BAGLANTI LINKLERI
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';


//
import { Navigation } from 'swiper/modules';




function MySwiper() {
  return (
    <Swiper className='umumi container' id='products'

    
      spaceBetween={30}

      navigation={true}
      modules={[ Navigation]}
   
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        680: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
        },
      }}


    >t
      <SwiperSlide >
        <div className="lip ">
          <h2>Tint</h2>
          <img src="./public/images/balm.webp" alt="" />
          <h5>Color:Toast</h5>
          <p>Meet Lip Tint. Sheer-but-buildable color that melts onto lips for a hint of tint and rich, glossy finish.</p>
        </div></SwiperSlide>

      <SwiperSlide><div className="kit">
        <h2> Kit</h2>
        <img src="./public/images/kit.webp" alt="" />
        <h5>Color:Standart</h5>
        <p>Meet your new classics, all bundled up in the rhode bubble bag. Our tried-and-true skincare essentials are formulated for ultimate barrier nourishment.</p>
      </div>
      </SwiperSlide>

      <SwiperSlide><div className="peptit">
        <h2>Peptit</h2>
        <img src="./public/images/peptit.png" alt="" />
        <h5>Color:White</h5>
        <p>A nutrient-rich, lightweight essence that boosts barrier function and provides immediate, luminous hydration. </p>
      </div></SwiperSlide>

      <SwiperSlide><div className="pink-lip">
        <h2>Pink lip tint</h2>
        <img src="./public/images/pinklip.webp" alt="" />
        <h5>Color:Pink</h5>
        <p>Meet Lip Tint. Sheer-but-buildable color that melts onto lips for a hint of tint and rich, glossy finish. The restorative. </p>
      </div></SwiperSlide>


      <SwiperSlide><div className="lip-set">
        <h2>Lip tint Set</h2>
        <img src="./public/images/colorlip.webp" alt="" />
        <h5>Color:Brown,Soft Pink,Pink,Peachy</h5>
        <p> Sheer-but-buildable color that melts onto lips for a hint of tint and rich, glossy finish. </p>
      </div></SwiperSlide>


      <SwiperSlide><div className="brown-lip">
        <h2>Brown lip tint</h2>
        <img src="./public/images/brownlip.webp" alt="" />
        <h5>Color:Brown</h5>
        <p>Glossy finish. The restorative, fragrance-free formula leaves lips naturally plump </p>
      </div></SwiperSlide>

    </Swiper>

  );
}

export default MySwiper;