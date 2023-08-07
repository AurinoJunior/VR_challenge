import axios from "axios";
import { TFormData } from "../@types/Form";
import { IResponseUserData } from "../@types/User";

interface IResponseLoginApi {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  login: async (formData: TFormData) => {
    const response = await axiosInstance.post<IResponseLoginApi>(
      "/auth/login",
      {
        ...formData,
      }
    );

    return response.data;
  },
  users: async (id: number) => {
    const response = await axiosInstance.get<IResponseUserData>(`/users/${id}`);
    return response.data;
  },
};
