import { create } from "zustand";

interface ScoreType {
  score: number;
  incrementScore: () => void;
  resetScore: () => void;
}

const useScoreStore = create<ScoreType>((set) => ({
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));

export default useScoreStore;
