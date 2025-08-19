import useAxiosBase from "../../../../hooks/use-axios-base";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateEstate = () => {
  const { postRequest } = useAxiosBase();
  const queryClient = useQueryClient();
  const handleSuccessfulLogin = (response: any) => {
    if (response?.data?.statusCode === 200) {
      console.log("Successful Login");
    }
  };
  return useMutation({
    mutationKey: ["CREATE_ESTATE"],
    mutationFn: (data) => postRequest("/developer/estate/create", data),
    onSuccess: (response) => {
      handleSuccessfulLogin(response)
      queryClient.invalidateQueries({ queryKey: ["CREATE_ESTATE"] });
    },
  });
};

export default useCreateEstate;
