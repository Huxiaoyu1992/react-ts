import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect')
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setMouse({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('click', updateMouse)
    // 清除副作用
    return () => {
      console.log('remove effect')
      document.removeEventListener('click', updateMouse)
    }
  })
  console.log('before render')
  return (
    <p>x: {mouse.x} - y: {mouse.y}</p>
  )
}

export default MouseTracker