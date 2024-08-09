// src/App.js
import React from 'react';
import useBottomDetection from './Hooks/useBottomDetection';

function App() {
  const handleBottomReach = () => {
    console.log('Div has reached the bottom');
  };

  const divRef = useBottomDetection(handleBottomReach);

  return (
    <div
      ref={divRef}
      style={{
        height: '200px',
        overflowY: 'scroll',
        border: '1px solid black',
        padding: '10px'
      }}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

export default App;
