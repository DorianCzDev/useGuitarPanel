import { useQuery } from "@tanstack/react-query";
import { getDeliveryMethodsApi } from "./apiDeliveries";

export function useDeliveries() {
  const { isLoading, data: deliveries } = useQuery({
    queryKey: ["deliveries"],
    queryFn: getDeliveryMethodsApi,
  });
  return { isLoading, deliveries };
}
