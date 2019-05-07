import React from 'react';
import logo from './../../static/logo.svg';
import './index.css';
import { Link } from 'react-router-dom'

function App() {
  const onAlert = () => {
    alert('hello')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={onAlert} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p>
        <Link to="about">to about page</Link>
      </header>
    </div>
  );
}

export default App;
