import axios from 'axios';

import { API_HOST } from './variables';

export const axiosInstance = axios.create({
  baseURL: API_HOST,
});
