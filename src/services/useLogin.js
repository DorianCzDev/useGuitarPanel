import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err);
      console.error(err.message);
    },
  });
  return { login, isPending };
}
