import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

  // ReactDOM.render(<App />, document.getElementById('app'));
main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
