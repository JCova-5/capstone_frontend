import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Feed from './components/Feed'

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pic Saver</h1>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Feed} />



      </Switch>
      
      
    </div>
  );
}

export default App;
