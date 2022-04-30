import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

import { authHeader, logout, getCurrentUser } from '../src/components/authenticationFunc';
import { SignInStore } from '../src/store/SignInPageStore'

function App() {
  const { user, setUser } = SignInStore();
  let history = createBrowserHistory();

  history.listen((location, action) => {
    const user = JSON.parse(localStorage.getItem('user'));
    //console.log("토큰 만료 검사");

    if (user) {
      const decodedJwt = authHeader(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        logout();
        setUser({});
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
    </BrowserRouter>
  );
}

export default App;
