import { useState, useEffect } from "react";
import "./CarouselProducts.css";

function CarouselProducts({ children, photo }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="carouselProducts">
      <h3 className="carousel-title">Мы в социальных сетях</h3>

      <div
        className="carousel"
        style={{ transform: `translateX(${index * 50}px)` }}
      >
        {children}
        {photo}
      </div>
      <div className="carousel-footer">
        <a className="instagram" href="https://vk.com/" target="_blank">
          <img src="./image/vk.svg" />
        </a>
        <div className="arrow">
          <button
            className="arrow-next"
            onClick={() => {
              setIndex((s) => s - 1);
            }}
          />
          <button
            className="arrow-prev"
            onClick={() => {
              setIndex((s) => s + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default CarouselProducts;
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function CarouselProducts() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
