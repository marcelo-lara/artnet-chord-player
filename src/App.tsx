import React from 'react';
import logo from './logo.svg';
import './App.css';
import chords_data from './chords/discovering-yourself.json';
import ChordsSheet from './Components/ChordsSheet;';

function App() {
  console.log(chords_data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chords App</h1>
      </header>
      <div className="App-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <ChordsSheet chords_data={chords_data} />
      </div>

    </div>
  );
}



export default App;
