import create from 'zustand';

const TextMiningPageStore = create((set) => ({
  text: "",
  setText(text) {
    set(() => ({ text: text }));
  },

}));

export { TextMiningPageStore };