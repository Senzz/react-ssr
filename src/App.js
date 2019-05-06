import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onAlert = () => {
    alert('hello')
  }
  return (
    <div className="App">
      <header onClick={onAlert} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onAlert}>
          Edit 1 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
