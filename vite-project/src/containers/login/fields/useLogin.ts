import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginFormValues } from "../login.types";
import { login } from "../../../API/authentication/authentication";
import { useApp } from "../../../store/app/app";

const useLogin = () => {
  const { setIsLoading } = useApp();

  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const handleLogin = methods.handleSubmit(async (data) => {
    setIsLoading(true);

    try {
      const response = await login(data);

      console.log(response.data.token);
    } catch (err: any) {
      console.log(err);
    }
    setIsLoading(false);
  });

  return {
    methods,
    handleLogin,
  };
};

export default useLogin;
