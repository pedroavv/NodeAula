import create from "zustand";
import { AppStore } from "./app.types";

const useApp = create<AppStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export { useApp };
