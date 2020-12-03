import React from 'react'

interface HelloProps {
  message?: string
}
// FunctionComponent是react内置的一个interface
// FC是FunctionComponent的类型别名
const Hello: React.FC<HelloProps> = (props) => {
return <h1>{props.message}</h1>
}

Hello.defaultProps = {
  message: '你好'
}

export default Hello