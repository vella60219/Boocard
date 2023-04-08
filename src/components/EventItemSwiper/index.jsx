import React, { useRef, useState } from "react";
//      Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//      Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./mySwiperStyle.css"
//      import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// ^ Swiper 相關

import styles from "./eventItemSwiper.module.css"
// ^ styles
import { EventItemL } from "../EventItem";
// ^ 自家的元件們

import events from "../../json/events.json"


function EventItemSwiper() {
    return (
        <div className={styles.box}>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={50}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {events.map(event => (
                    <SwiperSlide key={event.id} className={styles.slide}>
                        <EventItemL key={event.id} event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <p>123</p>
        </div>
    );
}

export default EventItemSwiper;