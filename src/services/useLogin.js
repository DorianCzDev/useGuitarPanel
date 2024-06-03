import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "./apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      console.error(err.message);
    },
  });
  return { login, isLoading };
}
