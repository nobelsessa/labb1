import React from 'react';
import './App.css';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './component4';
import Component5 from './component5';

function App() {
  return (
    <div className="container">
      <h1>Välkommen till Labb1 </h1>
      <div className="component">
        <Component1 message="Skriv ditt meddelande" />
      </div>
      <div className="component">
        <Component2 />
      </div>
      <div className="component">
        <Component3 />
      </div>
      <div className="component">
        <Component4 />
      </div>
      <div className="component">
        <Component5 />
      </div>
    </div>
  );
}

export default App;
