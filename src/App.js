import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as nums from './numbers'

const count = 0;
const phrase = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

       <p>
         {nums.count*nums.length}
       </p>
       
        <p style={{
          color: 'red'
        }}>Hello world!</p>

        <p>
          {count}
        </p>

        <p>
          {165}
        </p>

        <p>
          {2+3}
        </p>

        <p>
          {1 && 2 && 3}
        </p>

        <p>
          {phrase ? 'Phrase is true' : 'Phrase is false'}
        </p>
        
        <p>
          {undefined}
          {null}
          {true}
          {false}
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
