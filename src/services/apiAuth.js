import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function loginUser(body) {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    return response.data.user;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function logoutUser() {
  try {
    const response = await axios.delete(`${baseUrl}/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseUrl}/users/getCurrentUser`);
    return response.data.user;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
