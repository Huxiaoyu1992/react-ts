import React, { useState, useEffect, Fragment } from 'react'

// const Button: React.FC = () => {
//   const [state, setstate] = useState({num: 0, on: true})
//   return (
//     <Fragment>
//       <button onClick={() => setstate({ num: state.num + 1, on: !state.on })}>{state.num}</button>
//       <button onClick={() => setstate({ num: state.num + 1, on: !state.on })}>{state.on ? '开': '关'}</button>
//     </Fragment>
//   )
// }

// 上面的写法可以换成下面的写法---useState使在函数组件中使用私有的state成为可能
const Button: React.FC = () => {
  const [num, setNum] = useState(0)
  const [status, setStatus] = useState(true)
  // 这是不需要清除的effect
  useEffect(() => {
    // react在渲染后执行的操作：包含了componentDidMount和componentDidupdateß
    document.title = `点击了${num}次`
  })
  return (
    <Fragment>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setStatus( !status )}>{status ? '开': '关'}</button>
    </Fragment>
  )
}

export default Button