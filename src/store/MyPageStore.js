import create from 'zustand';

const MyPageStore = create((set) => ({
  title: "",
  setTitle(title) {
    set(() => ({ title: title }));
  },
}))

export { MyPageStore };