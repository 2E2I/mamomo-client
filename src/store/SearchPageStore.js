import create from 'zustand';

const SearchPageStore = create((set) => ({
  categoryIndex: 0,
  setCategoryIndex(index) {
    set(() => ({ categoryIndex: index }));
  },
  
  tagName: '',
  setTagName(name) {
    set(()=> ({ tagName: name }));
  },
  
}));

export { SearchPageStore };