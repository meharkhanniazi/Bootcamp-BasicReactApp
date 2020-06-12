import React from 'react';
import './App.css';
import Hello from './Hello';
import './Hello.css'
function App({name,age}) {
  
  return (
    <div>
      <p>Hello World! from <strong>{name}</strong>.</p>
      <p>I'm {age + 2 - 2} years old.</p>
      <Hello firstName={name}></Hello>
      <h3>Bootcamp 2020</h3>
        <p className = "myStyle">Project 1:</p>
        <ul>
            <li>Build an Expense Tracker App using React Hooks and Context API</li>
        </ul>
        <p>Project Due Date:</p>
        <ul>
          <li>Monday, June 22, 2020 Midnight Pakistan Standard Time</li>
        </ul>
    </div>
  );
}

export default App;
