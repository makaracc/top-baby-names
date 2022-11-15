import { useStore } from "zustand";

const useStore = create((set) => ({
  baby: [],
  setBaby: () => set((state) => ({ baby: state.baby })),
}));
