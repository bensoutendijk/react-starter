import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/auth/actions';

import Header from '../Header';
import TodoList from '../Todos';
import LogIn from '../LogIn';
import SignUp from '../SignUp';

import './App.scss';

function App() {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
      const getAuth = async () => {
          await dispatch(fetchUser());
      };

      getAuth().then(() => setReady(true));
  }, [dispatch]);

  if (ready) {
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

  return null;
}

export default App;
