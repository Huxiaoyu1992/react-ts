import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
function App() {
  const [show, setShow] = useState(true)
  const position = useMousePosition()
  return (
    <div className="App">
      <p><button onClick={()=>setShow(!show)}>点击控制MouseTracker的显示和隐藏</button></p>
      {/* 接口 */}
      <Hello />
      {/* useState的Hook */}
      <Button />
      {show && <MouseTracker />}
      {/* 自定义hook */}
      <p>x: {position.x} - y: {position.y}</p>
    </div>
  );
}

export default App;
