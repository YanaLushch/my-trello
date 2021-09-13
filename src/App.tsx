import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

const App: FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
      </Switch>
    </div>
  </Router>
);

export default App;
