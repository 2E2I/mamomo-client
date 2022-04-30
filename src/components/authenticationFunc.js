import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { SignInStore } from '../store/SignInPageStore';

const API_URL = "http://localhost:8080/api/user";

// 로그인
export const login = async (email, password) => {
  // const history = useHistory();
  //const { setError } = SignInStore();

  const { data } = await axios
    .post("http://localhost:8080/api/user/authenticate", {
      email: email,
      password: password,
    })
    .then((res) => {
      //console.log(res.data) // 토큰
      //setError(false);

      if (res.status === 200) {
        console.log('로그인 성공')
        // history.push('/')
      }
    })
    .catch((e) => {
      console.log(e);
      //setError(true);
    })

  if (data?.accessToken) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data;
};

// 로그아웃
export const logout = () => {
  localStorage.removeItem('user');
};


// export const register = (email, password) => {
//   console.log(email, password);
//   return axios.post(
//     `${API_URL}/???`,
//     {
//       email,
//       password,
//     },
//     { withCredentials: true }
//   );
// };

// 현재 사용자
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// 헤더
export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}