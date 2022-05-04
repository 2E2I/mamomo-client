import create from 'zustand';

const MyPageStore = create((set) => ({
  title: "프로필 관리",
  setTitle(title) {
    set(() => ({ title: title }));
  },

  index: 0,
  setIndex(index) {
    set(() => ({ index: index }));
  },
}))

export { MyPageStore };