import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://dummyjson.com/users",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default usersApi;
