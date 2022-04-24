import create from 'zustand';

const SignInStore = create((set) => ({
  email: "",
  setEmail(email) {
    set(() => ({ email: email }));
  },

  password: "",
  setPassword(password) {
    set(() => ({ password: password }));
  },

  keepingSignIn: false,
  setKeepingSignIn(keepingSignIn) {
    set(() => ({ keepingSignIn: keepingSignIn }));
  },

}));



export { SignInStore };