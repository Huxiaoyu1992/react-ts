import React, { useRef, useEffect, MutableRefObject } from 'react'
const FuncRefUse: React.FC = () => {
  const ref = useRef() as MutableRefObject<any>
  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div>
      <input type="text" name="child" ref={ref} />
      {/* <Child ref={ref} /> */}
    </div>
  )
}

// const Child = forwardRef((props, ref: Ref<any>) => {
//   return <input type="text" name="child" ref={ref} />;
// })

export default FuncRefUse
