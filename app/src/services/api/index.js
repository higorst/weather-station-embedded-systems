import axios from "axios";

export * from "./sensor";

const baseURL = "https://e9bc-177-223-164-105.ngrok.io";

const api = axios.create({
  baseURL,
});

export default api;
export { baseURL };
