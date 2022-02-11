import React from 'react'

function Output(props) {
    
  return (
    <div>
        <textarea type ="text" 
            placeholder="output"
            value={props.props.mystate.output}
        />
    </div>
  )
}

export default Output