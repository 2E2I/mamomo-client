import './App.css';
import axios from 'axios';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DesignTestPage from './pages/DesignTestPage/DesignTestPage';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <button
        onClick={() => {
          axios
            .get('/api/campaigns')
            .then((result) => {
              console.log(result.data);
            })
            .catch(() => {
              console.log('연결실패');
            });
        }}
      >
        axios 확인 버튼(콘솔로그 확인)
      </button>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/test" exact={true} component={DesignTestPage} />
    </div>
  );
}

export default App;
