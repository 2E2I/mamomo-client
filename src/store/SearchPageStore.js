import create from 'zustand';
import createStore from 'zustand';
import persist from '../utils/persist';

const SearchPageStore = createStore(
  persist(
    {
      key: 'Search',
    },
    (set) => ({
      categoryIndex: 0,
      setCategoryIndex: (index) => {
        set(() => ({ categoryIndex: index }));
      },

      tagName: '',
      setTagName: (name) => {
        set(() => ({ tagName: name }));
      },

      tagType: '',
      setTagType: (type) => {
        set(() => ({ tagType: type }));
      },

      word: '',
      setWord: (word) => {
        set(() => ({ word: word }))
      },

      initWord(word) {
        set(() => ({ word: "" }));
      },

      num: 0,
      setNum: (num) => {
        set(() => ({ num: num }))
      },
    }),
  ),
);

export { SearchPageStore };