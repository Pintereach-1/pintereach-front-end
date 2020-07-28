import React from 'react';
import './App.css';
import Login from './components/user/Login'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Route path='/login' component={Login} />

    </div>
  );
}

export default App;
