import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';


//Components
import Register from './components/user/Register';
import Login from './components/user/Login'
import { Dashboard } from './components/layout/Dashboard';
import { UserProfile } from './components/user/UserProfile';
import { SingleBoard } from './components/board/SingleBoard';




function App() {

  return (
    <div>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/user' component={UserProfile} />
      <PrivateRoute path='/dashboard' component={Dashboard} />  
      <PrivateRoute path='/board/:id' component={SingleBoard} />
    </div>
  );
}

export default App;
