import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getOrdersApi } from "./apiOrders";

export function useOrders() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const lastName = searchParams.get("lastName");
  const id = searchParams.get("id");
  const page = searchParams.get("page");
  const { isLoading, data: { ordersCount, orders } = {} } = useQuery({
    queryKey: ["orders", email, lastName, id, page],
    queryFn: () => getOrdersApi(email, lastName, id, page),
  });
  return { isLoading, ordersCount, orders };
}
