import React from 'react';
import { Switch, Route } from 'react-router'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default App;
