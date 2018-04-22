import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundFallback from './NotFoundFallback';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundFallback} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
