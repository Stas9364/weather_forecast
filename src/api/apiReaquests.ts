import axios from 'axios';

/////////////CURRENT WEATHER TYPING
export type LocationResponseType = {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    'tz_id': string
    'localtime_epoch': number
    localtime: string
}
export type CurrentWeatherResponseType = {
    'last_updated_epoch': number
    'last_updated': string
    'temp_c': number
    'feelslike_c': number
    uv: number
    'wind_kph': number
    'wind_dir': string
    'pressure_mb': number
    'humidity': number
    'cloud': number
    'condition': {
        text: string
        icon: string
    }
}
export type ResponseCurrentWeatherType = {
    location: LocationResponseType
    current: CurrentWeatherResponseType,
}

/////////////////HOURS WEATHER TYPING
export type HoursDataType = {
    'time_epoch': number
    time: string
    'temp_c': number
    condition: {
        text: string
        icon: string
    },
    cloud: number
    'feelslike_c': number
    'will_it_rain': number
    'chance_of_rain': number
    'will_it_snow': number
    'chance_of_snow': number
}
export type ForecastDayType =[
    {
        date: string
        'date_epoch': number
        day: {
            daily_chance_of_rain: number
            daily_chance_of_snow: number
            daily_will_it_rain: number
            daily_will_it_snow: number
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
export type HoursResponseType = {
    location: LocationResponseType
    current: CurrentWeatherResponseType
    forecast: {
        forecastday: ForecastDayType
    }
}
export type DailyResponseType = {
    location: LocationResponseType
    current: CurrentWeatherResponseType
    forecast: {
        forecastday: ForecastDayType
    }
}



////////AXIOS
export const instance = axios.create({
    method: 'GET',
    baseURL: 'https://api.weatherapi.com/v1/',
});


export const forecastAPI = {
    getCurrentData(location: string) {
        return instance.get<ResponseCurrentWeatherType>('current.json',
            {
                params: {
                    key: '734c7d69f1f44bdba87150403221407',
                    q: location
                }
            });
    },
    getHourlyData(location: string | null) {
        return instance.get< HoursResponseType>('forecast.json',
            {
                params: {
                    key: 'fd690f2bb40d448eb38184415221407',
                    q: location,
                    days:1
                }
            });
    },
    getDailyData(location: string | null) {
        return instance.get<DailyResponseType>('forecast.json',
            {
                params: {
                    key: '734c7d69f1f44bdba87150403221407',
                    q: location,
                    days: 3
                }
            });
    }
};


export const instanceWEB = axios.create({
    method: 'GET',
    baseURL: 'https://api.windy.com/api/webcams/v2/',
    headers: {
        'x-windy-key': 'MUaRa4bdLNtKuMv0aiuINYpf1akd5geG'
    }
});

export const webCamAPI = {
    getVideo() {
        return instanceWEB.get('list/nearby=46.54,7.98,5?show=webcams:url');
    }
};