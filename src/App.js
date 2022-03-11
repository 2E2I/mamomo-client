import './App.css';
import MainPage from './pages/MainPage';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={MainPage} /> //라우팅 설정
    </div>
  );
}

export default App;
