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
                spaceBetween={40}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            // ^ swiper 基礎設定
            >
                {events.map(event => (
                    <SwiperSlide key={event.id} className={styles.slide}>
                        <EventItemL key={event.id} event={event} />
                    </SwiperSlide>
                ))}
                {/* ^ 內容  */}
                <div className={`swiper-button-prev ${styles.navigationButton}`}>
                    <IoChevronBackOutline size={35} />
                </div>
                <div className={`swiper-button-next ${styles.navigationButton}`}>
                    <IoChevronForwardOutline size={35} />
                </div>
                {/* ^ 左右切換鍵 */}
            </Swiper>
            <div className={`borderBox borderBox2 ${styles.moreButton}`}>
                <div className={`gradientLineBtnBG ${styles.moreButtonPadding}`}>
                    <Link
                        to={'event'}
                        className={`gradientLineBtn h2`}
                    >
                        更多活動
                    </Link>
                </div>
            </div>
            {/* ^ 下方的更多活動鍵 */}
        </div>
    );
}

export default EventItemSwiper;