import {currentWeatherReducer, initState} from '../bll/reducers/currentWeatherReducer';
import {getCurrentWeatherAC} from '../bll/actions/currentWeatherAction';
import {ResponseCurrentWeatherType} from '../api/apiReaquests';

const weather: ResponseCurrentWeatherType = {
    'coord': {
        'lon': 27.5667,
        'lat': 53.9
    },
    'weather': [
        {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
        }
    ],
    'base': 'stations',
    'main': {
        'temp': 62.35,
        'feels_like': 61.66,
        'temp_min': 59.74,
        'temp_max': 62.35,
        'pressure': 1016,
        'humidity': 72,
    },
    'visibility': 10000,
    'wind': {
        'speed': 9.6,
        'deg': 296,
    },
    'clouds': {
        'all': 65
    },
    'dt': 1657177861,
    'sys': {
        'type': 1,
        'id': 8939,
        'country': 'BY',
        'sunrise': 1657158460,
        'sunset': 1657219270
    },
    'timezone': 10800,
    'id': 625144,
    'name': 'Minsk',
    'cod': 200
};

test('get current weather data', ()=>{
    const endState = currentWeatherReducer(initState, getCurrentWeatherAC(weather));

    expect(endState.data.name).toBe('Minsk');
});

