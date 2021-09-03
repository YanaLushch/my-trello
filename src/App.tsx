import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

const App: FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/board/:id" component={Board} />
      </Switch>
      <Route path="/" component={Home} />
    </div>
  </Router>
);

export default App;
