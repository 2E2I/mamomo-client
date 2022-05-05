import create from 'zustand';

const UserProfileStore = create((set) => ({
  nickname: "",
  setNickname(nickname) {
    set(() => ({ nickname: nickname }));
  },

  sex: "",
  setSex(sex) {
    set(() => ({ sex: sex }));
  },

  birth: "",
  setBirth(birth) {
    set(() => ({ birth: birth }));
  },

  favTopics: [],
  setFavTopics(favTopics) {
    set(() => ({ favTopics: favTopics }));
  },
}));

export { UserProfileStore };