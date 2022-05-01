import './App.css';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MainPage2 from './pages/MainPage/MainPage2';
import SearchPage from './pages/SearchPage';
import DesignTestPage from './pages/DesignTestPage/DesignTestPage';
import TagPage from './pages/TagPage/TagPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SearchingPage from './pages/SearchingPage/SearchingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MakeBannerPage from './pages/MakeBannerPage/MakeBannerPage';
import SignInPage from './pages/SignInPage';
import BannerListPage from './pages/BannerListPage/BannerListPage';

import { authHeader, logout, getCurrentUser } from '../src/components/authenticationFunc';
import { SignInStore } from '../src/store/SignInPageStore'
import axios from 'axios';

function App() {
  const {
    user,
    setUser,
    initUser,
    initStatus,
    setUserInfo,
    userInfo,
    email,
    status,
  } = SignInStore();
  let history = createBrowserHistory();

  history.listen((location, action) => {
    const user = localStorage.getItem('user');
    //console.log("토큰 만료 검사");

    if (user) {
      const decodedJwt = authHeader();

      if (decodedJwt.exp * 1000 < Date.now()) {
        logout();
        initUser();
        initStatus();
      }
    }
  });

  useEffect(() => {
    const user = getCurrentUser();
    console.log(user);
    if (user) {
      setUser(user);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user/${email}`, {
        headers: authHeader(),
      })
      .then((res) => {
        // setUserID(res.data.user.id);
        setUserInfo(res.data.user)
        console.log('연결~~~~');
        console.log(res.data.user); // 사용자 닉네임
        console.log(userInfo); // 사용자 닉네임

      })
      .catch((error) => {
        console.log(error.message);
        error.response.status == 400 &&
          console.log('로그인이 필요합니다.');
      });
  }, [status]);

  return (
    <BrowserRouter history={history}>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/test" exact={true} component={DesignTestPage} />
      <Route path="/test2" exact={true} component={MainPage2} />
      <Route path="/category" exact={true} component={CategoryPage} />
      <Route path="/tags/:tag" exact={true} component={TagPage} />
      <Route path="/searching" exact={true} component={SearchingPage} />
      <Route path="/signin" exact={true} component={SignInPage} />
      <Route path="/signup" exact={true} component={SignUpPage} />
      <Route path="/banner" exact={true} component={MakeBannerPage} />
      <Route path="/bannerList" exact={true} component={BannerListPage} />
    </BrowserRouter>
  );
}

export default App;
