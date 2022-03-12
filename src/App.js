import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={MainPage} /> //라우팅 설정
      <Route path="/search" exact={true} component={SearchPage} />
    </div>
  );
}

export default App;
