import { create } from "zustand";

interface InstagramStoreProps {
  data: any | null;
  updateData: (newData: any) => void;
}

export const useResponseInstagramDataStore = create<InstagramStoreProps>(
  (set) => ({
    data: [],
    updateData: (newData: any) => set({ data: newData }),
  })
);
