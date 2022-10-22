import { Typography } from "@mui/material";
import { CurrencyCircleDollar } from "phosphor-react";
import { FormProvider } from "react-hook-form";

import { Fields } from "./fields/fields";
import useLogin from "./fields/useLogin";
import { Form, Header, LoginContainer } from "./login.styles";

const Login = () => {
  const { methods, handleLogin } = useLogin();

  return (
    <LoginContainer>
      <Header>
        <CurrencyCircleDollar size={64} />
        <div>
          <Typography variant="h4" fontWeight={700}>
            Data Integra Finance
          </Typography>
          <Typography variant="subtitle1">
            Faça login e começe a usar
          </Typography>
        </div>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={handleLogin}>
          <Fields />
        </Form>
      </FormProvider>
    </LoginContainer>
  );
};

export default Login;
