import {instance} from "./apiReaquests";

export type SearchCompleteType=
    {
        "id": number
        "name": string
        "region": string
        "country": string
        "lat": number
        "lon": number
        "url": string
    }
export const searchAPI = {
    getSearchtData(location: string) {
        return instance.get<Array<SearchCompleteType>>('search.json',
            {
                params: {
                    key: 'fd690f2bb40d448eb38184415221407',
                    q: location
                }
            });
    },

};


