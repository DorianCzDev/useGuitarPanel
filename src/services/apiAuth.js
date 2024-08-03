import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function loginUser(body) {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
