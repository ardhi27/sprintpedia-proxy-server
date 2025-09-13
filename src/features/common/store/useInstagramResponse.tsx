import { Welcome } from "@/shared/types/instagram-data/instagram-response-types";
import { create } from "zustand";

interface InstagramStoreProps {
  data: Welcome | null;
  updateData: (newData: Welcome) => void;
}

export const useResponseInstagramDataStore = create<InstagramStoreProps>(
  (set) => ({
    data: null,
    updateData: (newData: Welcome) => set({ data: newData }),
  })
);
