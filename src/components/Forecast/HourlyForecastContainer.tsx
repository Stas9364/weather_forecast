// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import c from './hourContainer.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles.css';
// import required modules
import {Mousewheel, Navigation, Pagination} from 'swiper';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {HourlyForecast} from './HourlyForecastComponent/HourlyForecast';
import React, {useEffect} from 'react';
import {getHourlyForecastTC} from '../../bll/reducers/hourlyForecastReducer';
import {Preloader} from '../Preloader/Preloader';

export const HourlyForecastContainer = React.memo(() => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.initialization.selectedLocation);
    const hourWeather = useAppSelector(data => data.hourlyWeather);
    const isLoading = useAppSelector(state => state.initialization.isLoading);

    useEffect(() => {
        dispatch(getHourlyForecastTC(location));
    }, [location]);

    return (
        <div className={c.container}>

            <Swiper
                direction={'horizontal'}
                slidesPerView={5}
                spaceBetween={10}
                mousewheel={true}
                pagination={{type: 'custom'}}
                modules={[Mousewheel, Pagination, Navigation,]}
                className="mySwiper"
            >
                {
                    hourWeather && hourWeather.data.map((item, id) =>
                        <SwiperSlide key={id}>
                            {isLoading === 'loading'
                            ? <Preloader/>
                            :<HourlyForecast item={item}/>}
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
});

