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

  setCategory(ap) {
    set(() => ({ category: ap }));
  },
  setCategoryList(ap) {
    set(() => ({ category: ap }));
  },
}));

export { CategoryStore };
