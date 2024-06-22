import React from 'react';
import './App.css';
import AccountList from './components/AccountList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Banking Simulation</h1>
        <AccountList />
      </header>
    </div>
  );
}

export default App;
