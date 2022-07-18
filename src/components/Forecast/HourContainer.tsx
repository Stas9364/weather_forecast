// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import c from './hourContainer.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles.css";
// import required modules
import {Mousewheel, Navigation, Pagination} from "swiper";
import {useAppSelector} from "../../App/app/hooks";
import {HourlyForecast} from "./Hourly/HourlyForecast";
import React from "react";
import {SearchForecastContainer} from "../SearchForecast/SearchForecastContainer";

export const HourContainer = () => {
    const hourWeather = useAppSelector(data => data.hourlyWeather)
    return (
        <div className={c.container}>

            <Swiper
                direction={"horizontal"}
                slidesPerView={5}
                spaceBetween={10}
                mousewheel={true}
                pagination={{type: 'custom'}}
                modules={[Mousewheel, Pagination,Navigation,]}
                className="mySwiper"
            > {hourWeather && hourWeather.map((item, id) => <SwiperSlide key={id}>
                <HourlyForecast item={item} /></SwiperSlide>)}
            </Swiper>
        </div>
    );
}

