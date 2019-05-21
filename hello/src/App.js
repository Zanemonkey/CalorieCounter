import React from 'react';
import Calculator from './components/Calculator';


function App() {
  return (
    <div className="ui container" style={{marginTop: '50px'}}>
      <div className="ui huge header">
        Calories Burned Running Calculator
      </div>
      <Calculator/>
    </div>
  );
}

export default App;
