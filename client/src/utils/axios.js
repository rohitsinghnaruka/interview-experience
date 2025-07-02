// src/utils/axios.js
import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ Use your backend URL
  withCredentials: true, // allow cookies (optional for now)
});

// Automatically attach token to every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // JWT in header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
