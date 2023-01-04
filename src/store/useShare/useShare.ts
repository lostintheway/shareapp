import create from "zustand";

export const useShare = create<{ shares: any[] }>((set) => ({
  shares: [],
  setShares: (shares) => set((state) => ({ shares: state.shares })),
  delShareById: (id: number) =>
    set((state) => {
      return { shares: state.filter((oldShare) => oldShare.id !== id) };
    }),
}));
