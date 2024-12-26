import { create } from "zustand";

interface ScoreType {
  score: number;
  counter: number;
  isSelected: boolean;
  incrementScore: () => void;
  resetScore: () => void;
  setCounter: () => void;
  resetCounter: () => void;
  setIsSelected: () => void;
}

const useScoreStore = create<ScoreType>((set) => ({
  score: 0,
  counter: 30,
  isSelected: false,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
  setCounter: () =>
    set((state) => ({
      counter: state.counter !== 0 ? state.counter - 1 : state.counter,
    })),
  resetCounter: () => set({ counter: 30, isSelected: false }),
  setIsSelected: () => set({ isSelected: true }),
}));

export default useScoreStore;
