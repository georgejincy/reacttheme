import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

/* Import Views */
import Home from './views/Home'
import Locations from './views/Locations'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/locations' component={Locations} />
      </Switch>

    
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
