import {ResponseCurrentWeatherType} from '../api/apiReaquests';
import Clouds from '../assets/cloudy.gif';
import Sunny from '../assets/sunny.gif';
import Rain from '../assets/raining.gif';



export const setPic = (data: ResponseCurrentWeatherType) => {
    switch (data.weather[0].main) {
        case 'Clouds':
            return Clouds;
        case 'Clear':
            return Sunny;
        case 'Rain':
            return Rain;
        default:
            return '';
    }
};
