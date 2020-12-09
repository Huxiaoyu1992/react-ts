import React, { useState, Fragment } from 'react'

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
  return (
    <Fragment>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setStatus( !status )}>{status ? '开': '关'}</button>
    </Fragment>
  )
}

export default Button