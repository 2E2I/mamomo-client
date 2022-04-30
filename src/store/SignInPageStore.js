import create from 'zustand';

const SignInStore = create((set) => ({
  // 사용자 이메일
  email: "",
  setEmail(email) {
    set(() => ({ email: email }));
  },

  // 사용자 패스워드
  password: "",
  setPassword(password) {
    set(() => ({ password: password }));
  },

  // 로그인 상태 유지 (안 쓸 듯)
  // keepingSignIn: false,
  // setKeepingSignIn(keepingSignIn) {
  //   set(() => ({ keepingSignIn: keepingSignIn }));
  // },
  
  // 로그인 상태 여부 (로그인한 상태일 시 status: true)
  status: false,
  setStatus(status) {
    set(() => ({ status: status }));
  },

  // 로그인 유효성 검사 (오류 시 error: true)
  error: false,
  setError(error) {
    set(() => ({ error: error }));
  },

  // 유저
  user: {},
  setUser(user) {
    set(() => ({ user: user }));
  },

}));



export { SignInStore };