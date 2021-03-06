import React, { useState, createContext } from 'react';
import './App.css';
import Hello from './components/Hello'
import Button from './components/button'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader'
import MyRef from './components/classRef'
import TestButton from './components/TestButton'
import UseRefButton from './components/useRefButton'
import FuncRefUse from './components/FuncRefUse'
import Forward from './components/forward'

interface ISShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const theme: IThemeProps = {
  light: {
    color: '#000',
    background: '#efefef'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = createContext(theme.light)

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
      <ThemeContext.Provider value={theme.light}>
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
        {/* class中使用createRef */}
        <MyRef />
        {/* 测试：button */}
        <TestButton />
        {/* 用useRef实现的上面一个testButton不能实现的功能 */}
        <UseRefButton/>
        {/* 测试useRef */}
        <FuncRefUse/>
        {/* forwardRef: 用在组件嵌套子组件 需要穿透组件去获取子组件的ref的时候用 */}
        <Forward/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
