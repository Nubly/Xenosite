import logo from './logo.png';

import './App.css';
import { useState, useEffect } from 'react';

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  
  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []
  );

  return (
    <span>
      {date.toLocaleTimeString()}
    </span>
  );
}

function App() {

  return (
    <div
    className="App"
    >
      <header className="App-header">
        <div className="content">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            />
          <br></br>
          <p className="App-text">
            Welcome to 51aliens.space.
            We're excited to have you.
          </p>
          <p>
            It is currently {Clock()}.
          </p>
          <br></br>
          <a
          className="App-link"
          href="https://grafana.51aliens.space">
            Grafana
          </a>
          <br></br>
          <a 
          className="App-link"
          href="https://51aliens.space/dynmap">
            Dynmap
          </a>
          <br></br>
          <a 
          className="App-link"
          href="https://gitlab.51aliens.space">
            GitLab
          </a>
          <br></br>
          <a 
          className="App-link"
          href="https://code.51aliens.space">
            VSCode
          </a>
          <br></br>
          <a 
          className="App-link"
          href="https://request.51aliens.space">
            Overseerr
          </a>
          <br></br>
          <a 
          className="App-link"
          href="https://plex.x51aliens.space">
            Plex
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
