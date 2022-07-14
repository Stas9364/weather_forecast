import axios from 'axios';

/////////////CURRENT WEATHER TYPING
type LocationResponseType = {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    'tz_id': string
    'localtime_epoch': number
    localtime: string
}
type CurrentWeatherResponseType = {
    'last_updated_epoch': number
    'last_updated': string
    'temp_c': number
    'is_day': number
    'condition': {
        text: string
        icon: string
    }
}
export type ResponseCurrentWeatherType = {
    location: LocationResponseType
    current: CurrentWeatherResponseType,
    'feelslike_c': number,
    uv: number
}

/////////////////HOURS WEATHER TYPING
type HoursDataType = {
    'time_epoch': number
    time: string
    'temp_c': number
    condition: {
        text: string
        icon: string
    },
    cloud: number
    'feelslike_c': number
}
type HoursResponseType = {
    location: LocationResponseType,
    current: {
        'last_updated_epoch': number
        'last_updated': string
        'temp_c': number
        condition: {
            text: string
            icon: string
        },
        'feelslike_c': number
        uv: number
    },
    forecast: {
        forecastday: [
            {
                date: string
                'date_epoch': number
                day: {
                    'maxtemp_c': number
                    'mintemp_c': number
                    'avgtemp_c': number
                    condition: {
                        text: string
                        icon: string
                    }
                },
                astro: {
                    sunrise: string
                    sunset: string
                },
                hour: Array<HoursDataType>
            }
        ]
    }
}

////////AXIOS
export const instance = axios.create({
    method: 'GET',
    baseURL: 'https://api.weatherapi.com/v1/',
});


export const currentWeatherAPI = {
    getCurrentData(location: string) {
        return instance.get<ResponseCurrentWeatherType>('current.json',
            {
                params: {
                    key: '734c7d69f1f44bdba87150403221407',
                    q: location
                }
            });
    },
//     getFiveDaysForecast(location: string) {
//         return instance.get<ResponseFiveDaysForecast>('forecast',
//             {
//                 params: {
//                     key: '734c7d69f1f44bdba87150403221407',
//                     q: location,
//                 }
//             });
//     },
//     getThirtyDaysForecast(location: string) {
//         return instance.get<ResponseThirtyDaysForecast>('climate/month',
//             {
//                 params: {
//                     key: '734c7d69f1f44bdba87150403221407',
//                     q: location,
//                 }
//             });
//     },
};


