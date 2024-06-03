import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function deleteProductImageApi({ product, image }) {
  const { name } = product;
  const { imageId } = image;
  const url = `${baseUrl}/products/deleteImage/${name}?publicId=${imageId}`;
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
