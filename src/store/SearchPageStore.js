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

      word: '',
      setWord: (word) => {
        set(() => ({ word: word }))
      }

    }),
  ),
);

export { SearchPageStore };