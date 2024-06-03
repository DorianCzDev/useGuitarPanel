import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getProductsApi(sortBy, name) {
  let url = `${baseUrl}/products`;
  if (name || sortBy) {
    url = `${url}?`;
  }
  if (name) {
    url = `${url}name=${name}`;
  }
  if (sortBy) {
    url = `${url}&sortBy=${sortBy}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function getProductApi(isEditing) {
  if (!isEditing) return null;

  let url = `${baseUrl}/products/${isEditing}`;
  try {
    const response = await axios.get(url);
    return response.data.product;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function createProductApi(product) {
  let url = `${baseUrl}/products`;
  try {
    const response = await axios.post(url, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function updateProductApi(product) {
  let { name } = product;
  let url = `${baseUrl}/products/${name}`;
  try {
    const response = await axios.patch(url, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}

export async function deleteProductApi(product) {
  let { name } = product;
  let url = `${baseUrl}/products/${name}`;
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
}
