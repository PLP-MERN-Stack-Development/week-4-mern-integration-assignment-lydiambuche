import axios from 'axios';

const API = axios.create({ baseURL: '/api' }); 


// You can add auth headers here later if needed
export default API;
