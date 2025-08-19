import useAuth from "../../../hooks/use-auth";
import useAxiosBase from "../../../hooks/use-axios-base";
import type { LoginResponse } from "../../../types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

interface LoginParams {
  email: string;
  password: string;
  type?: string;
}

const useLoginUser = () => {
  const { setAuthUser } = useAuth();

  const { postRequest } = useAxiosBase();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSuccessfulLogin = (response: LoginResponse) => {
    const { value } = response;

    if (value.statusCode === 200) {
      const { user, token } = value.value;
      setAuthUser({ user, token });
      sessionStorage.setItem("user", JSON.stringify(value.value));
      navigate(from, { replace: true });
    }
  };


  return useMutation({
    mutationKey: ["LOGIN_USER"],
    mutationFn: (data: LoginParams) => postRequest("/account/login", data),
    onSuccess: (response) => {
      handleSuccessfulLogin(response)
      queryClient.invalidateQueries({ queryKey: ["LOGIN_USER"] });
    },
  });
};

export default useLoginUser;
