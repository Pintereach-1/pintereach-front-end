import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';


//Components
import Register from './components/user/Register';
import Login from './components/user/Login'
import { Dashboard } from './components/layout/Dashboard';
import { UserProfile } from './components/user/UserProfile';


function App() {
  return (
    <div>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/user' component={UserProfile} />
    </div>
  );
}

export default App;
