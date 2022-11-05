import { LoginFormValues } from "../../containers/login/login.types";
import { api, makeHeaders } from "../API";

const login = async (data: LoginFormValues) => await api.post("/login", data);

const logout = async () =>
  await api.post(
    "/logout",
    {},
    {
      headers: makeHeaders(),
    }
  );

export { login, logout };
