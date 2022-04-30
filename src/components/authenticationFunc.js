// 사용자 로그인/로그아웃 관련 메소드

// 로그아웃
export const logout = () => {
  localStorage.removeItem('user');
  window.location.replace('/');
};

// 현재 사용자
export const getCurrentUser = () => {
  return localStorage.getItem('user');
};

// 헤더
export const authHeader = () => {
  const user = localStorage.getItem('user');

  if (user) {
    return { Authorization: 'Bearer ' + user };
  } else {
    return {};
  }
}