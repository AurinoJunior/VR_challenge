import axios from "axios";

const authApi = axios.create({
  baseURL: "https://dummyjson.com/auth",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default authApi;
