import axios from 'axios';
const url = 'https://swapi.dev/api/people/';

const getCharacters = () => {
    return axios.get(url);
}

export default getCharacters;