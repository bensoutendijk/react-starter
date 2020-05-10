import React from 'react';
import './App.scss';
import Header from '../Header';
import TodoList from '../../pages/Todos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoList />
    </div>
  );
}

export default App;
