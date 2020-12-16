import React, { useState, useEffect, useRef } from 'react'

const UseRefButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef =  useRef(0)
  useEffect(() => {
    document.title = '点击了' + like + '次'
  }, [like])
  function handleClick() {
    setTimeout(() => {
      alert('click' +  likeRef.current)
    }, 3000)
  }

  return (
    <div>
      <button onClick={() => {setLike(like + 1); likeRef.current++ }}>{like}</button>
      <button onClick={handleClick}>alert!!!</button>
    </div>
  )
}
export default UseRefButton