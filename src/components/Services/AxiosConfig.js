import axios from 'axios';

const BASE_URL = 'https://tiny-hare-cowboy-hat.cyclic.app/';

const api = axios.create({
  baseUrl: BASE_URL,
});

export { BASE_URL, api };
