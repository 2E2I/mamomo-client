import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DesignTestPage from './pages/DesignTestPage/DesignTestPage';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/test" exact={true} component={DesignTestPage} />
    </div>
  );
}

export default App;
