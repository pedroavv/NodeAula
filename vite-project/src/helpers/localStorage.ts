import { keyEmail, keyToken } from "./persistance";
import type { Token } from "../store/app/auth/auth.types";

// Funções de acesso ao token
export const setLocalToken = (token: Token) => {
  if (token) {
    localStorage.setItem(keyToken, token);
  }
};

export const getLocalToken = () => {
  return localStorage.getItem(keyToken);
};

export const removeLocalToken = () => {
  localStorage.removeItem(keyToken);
};

// Funções de acesso ao email
export const setLocalEmail = (email: string) => {
  localStorage.setItem(keyEmail, email ?? "");
};

export const getLocalEmail = () => {
  return localStorage.getItem(keyEmail);
};

export const removeLocalEmail = () => {
  localStorage.removeItem(keyEmail);
};
