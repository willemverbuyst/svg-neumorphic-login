import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/Header';
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
