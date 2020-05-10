import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import TodoList from '../Todos';

import LogIn from '../LogIn';
import SignUp from '../SignUp';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/todos" component={TodoList} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
