import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
import MouseTracker from './components/MouseTracker'
function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <p><button onClick={()=>setShow(!show)}>点击控制MouseTracker的显示和隐藏</button></p>
      {/* 接口 */}
      <Hello />
      {/* useState的Hook */}
      <Button />
      {show && <MouseTracker />}
    </div>
  );
}

export default App;
