import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'

interface ISShowResult {
  message: string;
  status: string;
}

function App() {
  const [show, setShow] = useState(true)
  const position = useMousePosition()
  const url = 'https://dog.ceo/api/breeds/image/random'
  const [data, loading] = useUrlLoader(url, [show])
  // 断言
  // !!!!注意这里: 在挂载的时候data没值，需要进行兼容判断
  const result = data as ISShowResult || {
    message: '',
    status: ''
  }
  return (
    <div className="App">
      <p><button onClick={()=>setShow(!show)}>刷新图片</button></p>
      {/* 接口 */}
      <Hello />
      {/* useState的Hook */}
      <Button />
      {show && <MouseTracker />}
      {/* 自定义hook */}
      <p>x: {position.x} - y: {position.y}</p>
      {/* 自定义hook : useUrlLoader */}
      {loading ? <p>狗狗图片加载中...</p> : <img src={result.message} alt=""/>}
    </div>
  );
}

export default App;
