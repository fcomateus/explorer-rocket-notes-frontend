 import axios from "axios";

 export const api = axios.create({
    baseURL: "https://rocketnotes-api-4qe5.onrender.com"
 });