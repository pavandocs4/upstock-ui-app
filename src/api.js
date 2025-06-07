// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api.com", // Change to your API base URL
});

// Add token to request headers
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
