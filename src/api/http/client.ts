import axios from 'axios';

export const $soulHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOUL_SEARCH_API,
  timeout: 20000,

});
