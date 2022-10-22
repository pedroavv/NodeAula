import { LoginFormValues } from "../../containers/login/login.types";
import { api } from "../API";

const login = async (data: LoginFormValues) => await api.post("/login", data);

export { login };
