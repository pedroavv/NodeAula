import create from "zustand";
import decode from "jwt-decode";

import { IAuthStates, IAuthStore } from "./auth.types";
import {
  getLocalToken,
  removeLocalToken,
  setLocalToken,
} from "../../../helpers/localStorage";

const defaultState: IAuthStates = {
  token: null,
  isAuthenticated: false,
  profile: undefined,
};

let initialState = defaultState;

const token = getLocalToken();

if (token) {
  initialState = {
    token: token,
    isAuthenticated: true,
    profile: decode(token),
  };
}

const useAuth = create<IAuthStore>((set) => ({
  ...initialState,
  setToken: (token) => {
    setLocalToken(token);

    set(() => {
      if (!token) return defaultState;
      return {
        token: token,
        isAuthenticated: true,
        profile: decode(token),
      };
    });
  },
  clearStore: () => {
    removeLocalToken();
    set(defaultState);
  },
}));

export { useAuth };
