import create from 'zustand';

const CategoryStore = create((set) => ({
  category: 0,
  categoryList: [
    '전체보기',
    '아동',
    '어르신',
    '장애인',
    '어려운이웃',
    '다문화',
    '지구촌',
    '가족',
    '우리사회',
    '동물',
    '환경',
  ],
  storePage: 0,

  totalElements: 0,

  pageSize: 0,

  sortValue: 'heart=true',

  sortIndex: 1,

  setCategory(ap) {
    set(() => ({ category: ap }));
  },
  setCategoryList(ap) {
    set(() => ({ category: ap }));
  },
  setStorePage(ap) {
    set(() => ({ storePage: ap }));
  },
  setTotlaPage(ap) {
    set(() => ({ totalElements: ap }));
  },
  setPageSize(ap) {
    set(() => ({ pageSize: ap }));
  },

  initializeStorePage(ap) {
    set(() => ({ storePage: 0 }));
  },

  setSortValue(ap) {
    set(() => ({ sortValue: ap }));
  },

  initializeSortValue(ap) {
    set(() => ({ sortValue: 'heart=true' }));
  },

  setSortIndex(ap) {
    set(() => ({ sortIndex: ap }));
  },

  initializeSortIndex(ap) {
    set(() => ({ sortIndex: 1 }));
  },
}));

export { CategoryStore };
