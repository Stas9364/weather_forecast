import axios from 'axios';

export type ResponseCurrentWeatherType = {
    'coord': {
        'lon': number,
        'lat': number
    },
    'weather': [
        {
            'id': number,
            'main': string,
            'description': string,
            'icon': string
        }
    ],
    'base': string,
    'main': {
        'temp': number,
        'feels_like': number,
        'temp_min': number,
        'temp_max': number,
        'pressure': number,
        'humidity': number
    },
    'visibility': number,
    'wind': {
        'speed': number,
        'deg': number
    },
    'clouds': {
        'all': number
    },
    'dt': number,
    'sys': {
        'type': number,
        'id': number,
        'country': string,
        'sunrise': number,
        'sunset': number
    },
    'timezone': number,
    'id': number,
    'name': string,
    'cod': number
}

export const instance = axios.create({
    method: 'GET',
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '46f0d315c4msh7d2497d33f5842dp16b984jsn854b51a979c7',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
});


export const currentWeatherAPI = {
    getCurrentData(location?: string | null, lat?: any, lon?: any) {
        return instance.get<ResponseCurrentWeatherType>('weather',
            {params: {
                    q: location,
                    lat: lat,
                    lon: lon,
                    units: 'metric'
                }
            });
    }
};