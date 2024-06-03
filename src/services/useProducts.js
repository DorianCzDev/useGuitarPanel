import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "./apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const name = searchParams.get("name");

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", sortBy, name],
    queryFn: () => getProductsApi(sortBy, name),
  });
  return { isLoading, products };
}
