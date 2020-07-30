import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';


//Components
import Register from './components/user/Register';
import Login from './components/user/Login'
import { Dashboard } from './components/layout/Dashboard';
import { UserProfile } from './components/user/UserProfile';
import { CategoryDetail } from './components/categories/CategoryDetail';
import { NavBar } from './components/layout/NavBar';




function App() {

  return (
    <div>
      <NavBar />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute exact path='/' component={UserProfile} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />  
      <Route  path='/dashboard/:id' component={CategoryDetail} />
    </div>
  );
}

export default App;
