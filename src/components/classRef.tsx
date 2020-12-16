import React, { Component } from 'react'

class MyRef extends Component {
  // class里怎么使用createRef
  inputRef: React.RefObject<HTMLInputElement>
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.inputRef = React.createRef<HTMLInputElement>()
  }

  render() {
    return (
      <input type="text" ref={this.inputRef}/>
    )
  }

  componentDidMount() {
    if(!this.inputRef.current){
      return
  }
    this.inputRef.current.focus()
  }
}
export default MyRef