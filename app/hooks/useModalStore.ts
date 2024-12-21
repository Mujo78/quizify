import { create } from "zustand";

type ModalType = "quit" | "finish" | null;

interface DataType {
  score?: number;
  limit?: number;
}

interface ModalStoreType {
  type: ModalType;
  isOpen: boolean;
  data: DataType;
  onClose: () => void;
  onOpen: (type: ModalType, data: DataType) => void;
}

const useModalStore = create<ModalStoreType>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type: ModalType, data: DataType) => {
    set({ type, isOpen: true, data: { ...data } });
  },
  onClose: () => {
    set({ type: null, isOpen: false, data: {} });
  },
}));

export default useModalStore;
