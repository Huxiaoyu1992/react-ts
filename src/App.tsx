import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
import MouseTracker from './components/MouseTracker'
function App() {
  return (
    <div className="App">
      {/* 接口 */}
      <Hello />
      {/* useState的Hook */}
      <Button />
      <MouseTracker />
    </div>
  );
}

export default App;
