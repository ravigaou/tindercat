import axios from 'axios';

const CAT_URL = process.env.EXPO_PUBLIC_CAT_API_URL;
const CAT_KEY = process.env.EXPO_PUBLIC_CAT_API_KEY;


const api = axios.create({
  baseURL: CAT_URL,
  // baseURL: 'https://developers.thecatapi.com/',

  headers: {
    'Content-Type': 'application/json',
    'x-api-key': CAT_KEY,
  },
});

export default api;
