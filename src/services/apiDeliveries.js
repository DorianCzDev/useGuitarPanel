import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getDeliveryMethodsApi() {
  const url = `${baseUrl}/deliveries`;
  try {
    const response = await axios.get(url);
    return response.data.deliveries;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function createDeliveryMethodApi(data) {
  const url = `${baseUrl}/deliveries`;
  try {
    const response = await axios.post(url, data);
    return response.data.delivery;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function deleteDeliveryMethodApi(id) {
  const url = `${baseUrl}/deliveries/${id}`;
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function getDeliveryMethodApi(isEditing) {
  if (!isEditing) return null;
  const url = `${baseUrl}/deliveries/${isEditing}`;
  try {
    const response = await axios.get(url);
    return response.data.delivery;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function updateDeliveryMethodApi({ isEditing, data }) {
  const url = `${baseUrl}/deliveries/${isEditing}`;
  try {
    const response = await axios.patch(url, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
