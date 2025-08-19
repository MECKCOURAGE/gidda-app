  import { Button } from "../../components/ui/button";
  import FormInput from "../../components/common/Input";
  import Typography from "../../components/common/typography";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import useLoginUser from "./hooks/use-login-user";
  import { useQueryClient } from "@tanstack/react-query";
  import loginIm from "../../assets/images/loginIm.png";
  import { useState } from "react";
  import { Link } from "react-router-dom";

  const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const loginMutation = useLoginUser();
    const { isPending, mutate: login } = loginMutation;
    const form = useForm({
      resolver: yupResolver(LoginSchema),
      mode: "all",
    });
    const queryClient = useQueryClient();

    const handleLogin = form.handleSubmit((data) => {
      const submitData = {
        ...data,
        type: "DEVELOPER",
      };
      login(submitData, {
        onSuccess: () => {
          queryClient.clear();
        },
        onError: (error) => {
          setErrorMessage(error.message);
        },
      });
    });

    return (
      <div className="mx-auto flex min-h-screen w-full gap-[60px] xl:px-0">
        <div className="relative hidden w-[701px] h-[200px] flex-col  lg:flex ">
          <img src={loginIm} alt="" />
        </div>

        <div className="flex w-full flex-1 flex-col bg-cover bg-bottom bg-no-repeat pb-8 pt-6 md:px-[20px] lg:justify-center">
          <div className="max-w-[500px]">
            <div className="w-full">
              <Typography className="font-millik text-green capitalize text-[48px] leading-[58px]">
                Welcome to Giddaa
              </Typography>
              <Typography className="py-[15px] text-[16px] ml-3 font-redhat">
                Log into your account to manage your properties, like a pro!
              </Typography>

              <form
                onSubmit={handleLogin}
                className="mt-[24px] flex w-full flex-col space-y-4"
              >
                <FormInput
                  label={"Email"}
                  required
                  placeholder={"Enter email address"}
                  {...form.register("email")}
                  error={form.formState.errors.email?.message}
                  className=" border pl-[17px] h-[45px] font-redhat font-normal text-black text-[12px] leading-[22px] w-full"
                />
                <div className="flex flex-col">
                  <FormInput
                    label={"Password"}
                    required
                    placeholder={"Enter Password"}
                    type="password"
                    {...form.register("password")}
                    error={form.formState.errors.password?.message}
                    className=" border pl-[17px] h-[45px] font-redhat font-normal text-black text-[12px] leading-[22px] w-full"
                  />
                </div>
                <div className="text-red-700 text-[15px] font-millik mx-auto uppercase">
                  {errorMessage}
                </div>

                <div className="flex flex-col">
                  <Button
                    className="flex items-center pl-[12px] h-[45px] font-bold w-[104px] mx-auto font-redhat pr-4 rounded-full text-[12px] text-offWhite bg-green border"
                    type="submit"
                    disabled={form.formState.isDirty && !form.formState.isValid}
                    isLoading={isPending}
                    size={"large"}
                  >
                    {isPending ? "Logging in..." : "Login"}
                  </Button>

                  <h4 className="uppercase text-green font-redhat mt-[50px] font-extrabold ml-[20px]">
                    <Link to="/home">back to home page</Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Login;

  const LoginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short"),
  });
