import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
function App() {
  return (
    <div className="App">
      {/* 接口 */}
      <Hello />
      {/* useState的Hook */}
      <Button />
    </div>
  );
}

export default App;
