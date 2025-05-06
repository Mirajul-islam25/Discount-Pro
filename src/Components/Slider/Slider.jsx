import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import img1 from '../../assets/photo-1682687982502-1529b3b33f85.jpg'
import img2 from '../../assets/GettyImages-646951666--1-.jpg'
import img3 from '../../assets/desert.jpg'
import img4 from '../../assets/Boreal-River_Magpie_2016-08-1193-2.jpg'
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Slider = () => {
    const images = [
        img1, img2, img3, img4
    ];

    return (
        <div className=" mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
            >

                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                        className="w-full h-[500px]"
                />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;