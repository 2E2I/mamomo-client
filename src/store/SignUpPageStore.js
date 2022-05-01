import create from 'zustand';

const SignUpStore = create((set) => ({
  email: "",
  setEmail(email) {
    set(() => ({ email: email }));
  },

  password: "",
  setPassword(password) {
    set(() => ({ password: password }));
  },

  checkPassword: "",
  setCheckingPassword(checkPassword) {
    set(() => ({ checkPassword: checkPassword }));
  },

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



export { SignUpStore };