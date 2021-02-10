import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavbarSample from './pages/NavbarSample';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/navbarsample" component={NavbarSample} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
