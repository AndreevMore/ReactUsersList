import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
