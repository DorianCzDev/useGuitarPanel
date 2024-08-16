import { useQuery } from "@tanstack/react-query";
import { getReportedReviewsApi } from "./apiReviews";
import { useSearchParams } from "react-router-dom";

export function useReviews() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { isLoading, data: { reviewsCount, reviews } = {} } = useQuery({
    queryKey: ["reviews", page],
    queryFn: () => getReportedReviewsApi(page),
  });
  return { isLoading, reviews, reviewsCount };
}
