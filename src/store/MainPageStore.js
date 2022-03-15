import create from 'zustand';

const ListStore = create((set) => ({
  categories: [],
  setCategory(list) {
    set(() => ({ categories: list}));
  },
}));



export { ListStore };