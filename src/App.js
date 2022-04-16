import './App.css';
import axios from 'axios';
import MainPage from './pages/MainPage';
import MainPage2 from './pages/MainPage/MainPage2';
import SearchPage from './pages/SearchPage';
import DesignTestPage from './pages/DesignTestPage/DesignTestPage';
import TagPage from './pages/TagPage/TagPage';
import CategoriePage from './pages/CategoriePage/CategoriePage';
import SearchingPage from './pages/SearchingPage/SearchingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import { Link, Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/test" exact={true} component={DesignTestPage} />
      <Route path="/test2" exact={true} component={MainPage2} />
      <Route path="/categorie" exact={true} component={CategoriePage} />
      <Route path="/tags/:tag" exact={true} component={TagPage} />
      <Route path="/searching" exact={true} component={SearchingPage} />
      <Route path="/signin" exact={true} component={SignInPage} />
      <Route path="/signup" exact={true} component={SignUpPage} />
    </div>
  );
}

export default App;
