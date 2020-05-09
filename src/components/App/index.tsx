import React from 'react';
import './App.scss';
import Header from '../Header';
import SignUp from '../../pages/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SignUp />
    </div>
  );
}

export default App;
