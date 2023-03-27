function ConditionalComp(props){
   let Value;

   if(props.Status==='OK'){
    Value='Its All Clear '
   }
   else if (props.Status==='Wait'){
    Value='You have to wait for confirmation'
   }
   else if(props.Status==='No'){
    Value='No You Can not go  '
   }
   else{
    Value=" No Response"
   }
    return(
        <div>
           <h1 style={{color:'blue'}}>This is Conditional Component With {Value}</h1>
        </div>
    )
}

export default ConditionalComp