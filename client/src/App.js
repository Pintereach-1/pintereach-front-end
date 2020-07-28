import React from 'react';
import './App.css';
import Login from './components/user/Login'
import { Route } from 'react-router-dom';
import Register from './components/user/Register';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;
