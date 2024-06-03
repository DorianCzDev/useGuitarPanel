import axios from "axios";

export async function loginUser(body) {
  try {
    const response = await axios.post("http://localhost:5001/api/login", body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
