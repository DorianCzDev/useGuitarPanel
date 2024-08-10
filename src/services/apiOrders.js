import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getOrdersApi(email, lastName, id, page) {
  let url = `${baseUrl}/orders`;
  if (page) {
    url = `${url}?page=${page}`;
  } else {
    url = `${url}?page=1`;
  }
  if (email) {
    url = `${url}&email=${email}`;
  }
  if (lastName) {
    url = `${url}&lastName=${lastName}`;
  }
  if (id) {
    url = `${url}&id=${id}`;
  }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function getOrderApi(id) {
  let url = `${baseUrl}/orders/${id}`;
  try {
    const response = await axios.get(url);
    return response.data.order;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
