import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import './slides/ra.css';
import {Slide1} from "./slides/Slide1";
import {Slide2} from "./slides/Slide2";
import {Slide3} from "./slides/Slide3";

export const Carousel = () => {
    return(
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
        >
            <SwiperSlide><Slide1/></SwiperSlide>
            <SwiperSlide><Slide2/></SwiperSlide>
            <SwiperSlide><Slide3/></SwiperSlide>
        </Swiper>
    )
}
