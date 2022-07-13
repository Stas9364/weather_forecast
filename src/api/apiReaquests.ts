import axios from 'axios';

export type ResponseCurrentWeatherType = {
    'coord': {
        'lon': number
        'lat': number
    },
    'weather': [
        {
            'id': number
            'main': string
            'description': string
            'icon': string
        }
    ],
    'base': string
    'main': {
        'temp': number
        'feels_like': number
        'temp_min': number
        'temp_max': number
        'pressure': number
        'humidity': number
    },
    'visibility': number
    'wind': {
        'speed': number
        'deg': number
    },
    'clouds': {
        'all': number
    },
    'dt': number
    'sys': {
        'type': number
        'id': number
        'country': string
        'sunrise': number
        'sunset': number
    },
    'timezone': number
    'id': number
    'name': string
    'cod': number
}

export type ResponseFiveDaysForecast = {
    list: Array<ResponseType>
}
type ResponseType = {
    clouds: { all: number }
    dt: number
    dt_txt: string
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    }
    pop: number
    rain: { '3h': number }
    sys: { pod: string }
    visibility: number
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    wind: {
        speed: number
        deg: number
        gust: number
    }
}
type ListForThirtyType = {
    "dt": number
    "humidity": number
    "pressure": number
    "temp": {
        "average": number
        "average_max": number
        "average_min": number
        "record_max": number
        "record_min": number
    }
    "wind_speed": number
}
export type ResponseThirtyDaysForecast = {
    "cod": string
    "city": {
        "id": number
        "name": string
        "coord": {
            "lon": number
            "lat": number
        }
        "country": string
    }
    "message": number
    "list": Array<ListForThirtyType>
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
    getCurrentData(location?: string | null, lat?: string, lon?: string) {
        return instance.get<ResponseCurrentWeatherType>('weather',
            {
                params: {
                    q: location,
                    lat: lat,
                    lon: lon,
                    units: 'metric'
                }
            });
    },
    getFiveDaysForecast(location: string) {
        return instance.get<ResponseFiveDaysForecast>('forecast',
            {
                params: {
                    q: location,
                    units: 'metric'
                }
            });
    },
    getThirtyDaysForecast(location: string) {
        return instance.get<ResponseThirtyDaysForecast>('climate/month',
            {
                params: {
                    q: location,
                }
            });
    },
};