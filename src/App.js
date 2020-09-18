import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const login = async () => {

  }

  const logout = async () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        { !currentUser && (
          <div>
            <button onClick={login}>Login</button>
          </div>
        )}
        { currentUser && (
          <button onClick={logout}>Logout</button>
        )}
      </header>
    </div>
  );
}

export default App;
