import React, {useState} from 'react'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import Routers from './routers'

import C1 from './cmp/c1'
import C2 from './cmp/c2'

import logo from './logo.svg';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true)

  function toggle() {
    setFlag(!flag)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ol>
          <Routers />
          <img src={logo} className="App-logo" alt="logo" />
          {flag ? <C1 data='C1 cmp' /> : null}
          <C2 data='C2 cmp' />
          <button onClick={toggle}>toggle</button>
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
        </header>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
