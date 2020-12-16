import React, { useContext } from 'react'
import { ThemeContext } from '../App'
interface HelloProps {
  message?: string
}
// FunctionComponent是react内置的一个interface
// FC是FunctionComponent的类型别名
const Hello: React.FC<HelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  const style = {
    color: theme.color,
    background: theme.background
  }
  return <h1 style={style}>{props.message}</h1>
}

Hello.defaultProps = {
  message: '你好'
}

export default Hello