import React from 'react'


function Input(props) {
    
  return (
    <div>
        <textarea type="text" 
            placeholder="input" 
            value={props.props.mystate.input}
             onChange = {(e)=>{props.props.handleChange3(e)}} 
        />
    </div>
  )
}

export default Input