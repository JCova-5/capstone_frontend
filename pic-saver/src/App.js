import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Feed from './components/Feed'

import Login from './components/Login'
import Profile from './components/Profile'

import './App.css';



const App = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    
  }, [user])

  return (
    <div className="App">
      <h1 className="mainHeader">MyPic</h1>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Feed} />
        <Route exact path='/profile/:id' component = {(props)=><Profile {...props} /> }/>
      </Switch>
      
      
    </div>
  );
}

export default App;
