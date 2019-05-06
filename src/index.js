import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loadable from 'react-loadable';

const root = document.querySelector('#root');
// ReactDOM.render(<App />, root);
if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, root);
  });
} else {
  // If we're not running on the server, just render like normal
  ReactDOM.render(<App />, root);
}
