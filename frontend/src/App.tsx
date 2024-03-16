import React from 'react';
import './App.css';
import Header from './header';
import BowlerList from './bowlers/BowlerList';

function Welcome() {
  return (
    <p>
      This page displays a list of bowlers in the Barbara and David Fournier
      Bowling company, that belong to the Marlins or Sharks.
    </p>
  );
}
function App() {
  return (
    <div className="App">
      <Header title="List of Bowlers" />
      <Welcome />
      <BowlerList />
    </div>
  );
}

export default App;
