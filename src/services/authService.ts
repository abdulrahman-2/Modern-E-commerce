import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;
const USER_KEY = "ecommerce-user";

const signup = async (userData: any) => {
  const response = await axios.post(API_URL + "api/auth/signup", userData);
  if (response.data) {
    localStorage.setItem(USER_KEY, JSON.stringify(response.data));
  }
  return response.data;
};

const signin = async (userData: any) => {
  const response = await axios.post(API_URL + "api/auth/signin", userData);
  if (response.data) {
    localStorage.setItem(USER_KEY, JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem(USER_KEY);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY) || "null");
};

const authService = {
  signup,
  signin,
  logout,
  getCurrentUser,
};

export default authService;
