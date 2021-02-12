import * as React from 'react';
import './App.css';
// import axios from 'axios';

const { useState } = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>
        The count is { counter }
      </p>
      <button onClick={() => {
        setCounter(counter + 1)}
      }>
        +
      </button>
      <button onClick={() => {
        setCounter(counter - 1)}
        }>
        -
      </button>
    </div>
  );
}
