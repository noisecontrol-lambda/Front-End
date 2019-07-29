import React from 'react';

import Class from './components/Class'
import sampleData from './sampleData'

import './App.css';

const teacher = sampleData;
console.log(teacher);

function App() {
  return (
    <div className="App">
      <Class teacher={teacher} />
    </div>
  );
}

export default App;
