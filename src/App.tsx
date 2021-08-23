import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './pages/Board/Board';

const App: FC = () => (
  <Router>
    <div className="App">
      <Route path="/board" component={Board} />
    </div>
  </Router>
);

export default App;
