import { Component } from "react";
 
class LifeCycle extends Component {
    // this is writen in first and called in first in mounting
    constructor(props){
        super(props)
        this.state={
            Count:0
        }
        console.log('this is inside constructor which Comes On Top in 1St Place in Mounting Face')
    }

    // this is writen in 2nd place but called in 4th place 

    componentDidMount(){
        console.log('this tells Component Did Mount which Comes in 4Th Place in Mounting Face ')
    }

    // this is writteh in 3rd place but comes in 2rd place

    static getDerivedStateFromProps(props,state){
        console.log('this is getderivedstatefromProps  it is used when use of redux to store prop values as state and this comes in 2nd place in Mounting Face ')
        return true
      }

      // this written in 4th place but comes in 3rd place
    render(){
        return(
            <div>
                <h1>lets See this Count or not : {this.state.Count}</h1>
                {console.log('this is inside render This comes in 3rd In Mounting State')}
                <button onClick={()=>{this.setState({Count:this.state.Count+1})}}>Add</button>
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log('this is ShouldComponentUpdate Which is In Updating Face in Life-Cycle method')
        return true
    }

    componentDidUpdate(){
        console.log('this is ComponentDidUpdate which is in Updating face in Life cycle method')
    }

    getSnapshotBeforeUpdate(){
        console.log('this is getSnapShotBeforeUpdate which is in updating face in life cycle method')
        return true
    }
}

export default LifeCycle