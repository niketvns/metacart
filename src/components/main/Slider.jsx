import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ image }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    image.map((img) => {
                        return (
                            <SwiperSlide>
                                <div className="slider">
                                    <img src={img} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider;