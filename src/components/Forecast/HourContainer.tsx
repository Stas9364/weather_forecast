// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles.css";

// import required modules
import {Mousewheel, Pagination} from "swiper";
import {useAppSelector} from "../../App/app/hooks";
import {HourlyForecast} from "./Hourly/HourlyForecast";
import React from "react";

export const HourContainer=()=> {
    const hourWeather = useAppSelector(data => data.hourlyWeather)
    return (
        <>
            <Swiper
                direction={"horizontal"}
                slidesPerView={5}
                spaceBetween={10}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            > {hourWeather && hourWeather.map((item, id) => <SwiperSlide key={id}>
                <HourlyForecast item={item}/></SwiperSlide>)}
            </Swiper>
        </>
    );
}
