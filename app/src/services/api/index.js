import axios from "axios";

export * from "./sensor";

const api = axios.create({
  baseURL: "http://127.0.0.1:3001/",
});

export default api;
