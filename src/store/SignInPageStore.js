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
  
  status: false,
  setStatus(status) {
    set(() => ({ status: status }));
  },

  error: false,
  setError(error) {
    set(() => ({ error: error }));
  },

  user: {},
  setUser(user) {
    set(() => ({ user: user }));
  },

}));



export { SignInStore };