import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div>
        this is a number : {this.state.count}
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>ADD</button>
      </div>
    )
  }
}

export default Counter