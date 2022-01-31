import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';

let greeting = prompt('Введите свое имя');

const handleMessageClick = () => {
  greeting = prompt('Введите свое имя');
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message text={greeting} onTextClick={handleMessageClick} />
      </header>
    </div>
  );
}

export default App;
