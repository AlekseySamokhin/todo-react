import axios from "axios";

const URL = "http://localhost:8010";

const api = axios.create({
  baseURL: URL,
});

export default api;
