import React, { useState, useEffect } from 'react'

// 自定义hook必须以use开头
const useMousePosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY})
      console.log(position)
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [position])
  return position
}

export default useMousePosition