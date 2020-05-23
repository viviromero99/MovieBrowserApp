import axios from 'axios'

let key = 0;

export const fetchFilms = async (filmName) => {
    const response = await axios.get(`http://www.omdbapi.com/?t=${filmName}&plot=full&apikey=${APIKEY}`);
    const results = await response.data;
    console.log(results)
    FinalRes = {...results, key: JSON.stringify(key)};
    key = key + 1;
    return FinalRes;
}


const APIKEY = '8c801cd7';