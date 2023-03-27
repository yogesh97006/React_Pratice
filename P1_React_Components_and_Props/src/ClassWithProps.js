import { Component } from "react";

class ClassWithProps extends Component{
    render(){
        return(
            <div>
             <button>{this.props.button}</button>
            </div>
        )
    }
}

export default ClassWithProps