import React, { useState, useEffect } from 'react'
// 在这样的情况下: 假如将like点击四次,然后点击Alert按钮，再立马点击setLike， 最后handleClick输出的结果是4而不是最终的结果。
const TestButton: React.FC = () => {
  const [like, setLike] = useState(0)
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])
  function handleClick () {
    setTimeout(() => {
      alert('click' + like + 'times')
    }, 3000)
  }
  return (
    <div>
      <button onClick={()=> {setLike( like + 1 )}}>增加次数{like}</button>
      <button onClick={handleClick}>Alert!</button>
    </div>
  )
}

export default TestButton