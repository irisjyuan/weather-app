import React from 'react';
import { Counter } from './features/counter/Counter';
import { Location } from './features/weather/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Weather App</h2>
      <Location />
      <Counter />
    </div>
  );
}

export default App;
