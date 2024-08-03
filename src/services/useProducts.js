import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "./apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const name = searchParams.get("name");
  const page = searchParams.get("page");

  const { isLoading, data: { productsCount, products } = {} } = useQuery({
    queryKey: ["products", sortBy, name, page],
    queryFn: () => getProductsApi(sortBy, name, page),
  });
  return { isLoading, products, productsCount };
}
