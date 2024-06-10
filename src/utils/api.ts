import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

console.log(`BASEURL => ${baseURL}`);

const api = axios.create({ baseURL });

export default api;
