import create from 'zustand';

const HeartCheckStore = create((set) => ({
  flag: true,

  setFlag() {
    set((state) => ({ flag: !state.flag }));
  },
}));

export { HeartCheckStore };
