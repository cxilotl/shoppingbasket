import React from 'react';
import logo from './logo.svg';

import cssStyles from './App.module.scss';

function App() {
  return (
    <div className={ cssStyles.app }>
      <header className={ cssStyles['app-header'] }>
        <img src={logo} className={ cssStyles.app-logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={ cssStyles['app-link'] }
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
