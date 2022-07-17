import {HoursResponseType, instance} from "./apiReaquests";

export const hourlyWeatherAPI = {
    getHourlyData(location: string) {
        return instance.get< HoursResponseType>('forecast.json',
            {
                params: {
                    key: 'fd690f2bb40d448eb38184415221407',
                    q: location,
                    days:1
                }
            });
    },
};


