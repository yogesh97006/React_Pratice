import { useState } from "react"

function Hook(){

  const [Count,setCount]=useState(0)
  const [Name,setName]=useState('Yogesh')

    return(
        <div>
           <h1>This is my name : {Name}</h1>
            <h3>This the Current  Count : { Count}</h3>
            <button onClick={()=>{setCount(0)}}>reset</button>
            <button onClick={()=>{setCount(Count+1)}}>+</button>
            <button onClick={()=>{setCount(Count-1)}}>-</button>
        </div>
    )
}

export default Hook