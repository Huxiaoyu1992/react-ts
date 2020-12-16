import React, { MutableRefObject, useRef, useEffect, forwardRef, Ref } from 'react'

const Forward: React.FC = () => {
  const ref =  useRef() as MutableRefObject<any>

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <>
      <Child ref={ref} />
    </>
  )
}
const Child = forwardRef((props, ref: Ref<any>) => {
  return <input type="number" name="child" ref={ref}/>
})

export default Forward