import React, { useState } from 'react'

const Button: React.FC = () => {
  const [state, setstate] = useState(1)
return <button onClick={() => setstate(state + 1)}>{state}</button>
}

export default Button