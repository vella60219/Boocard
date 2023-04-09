// 接收多個活動資料，用 EventItemL map 為 list，裝在 Swiper
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
// ^^^ Swiper 相關，沒用到的東西我也不敢刪，他問題好多的感覺

import styles from "./eventItemSwiper.module.css"
// ^ styles
import { Link } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
// ^ 外部元件們
import { EventItemL } from "../EventItem";
// ^ 自家的元件們


function EventItemSwiper({ events }) {
    return (
        <div className={styles.box}>
            <h1 className={`h1 ${styles.title}`}>即將舉辦的活動</h1>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={100}
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
                <div className={`swiper-button-prev ${styles.navigationButton}`}>
                    <IoChevronBackOutline size={35} />
                </div>
                <div className={`swiper-button-next ${styles.navigationButton}`}>
                    <IoChevronForwardOutline size={35} />
                </div>
            </Swiper>
            <Link
                to={'event'}
                className={`gradientBtn h2 ${styles.moreButton}`}
            >
                更多活動
            </Link>
        </div>
    );
}

export default EventItemSwiper;