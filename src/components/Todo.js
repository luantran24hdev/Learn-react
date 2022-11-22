import React from 'react'
import Button from '@atlaskit/button';
import CheckIcon from '@atlaskit/icon/glyph/check'

import styled from 'styled-components';


// class="b"
// isCompleted -> b ok

// isCompleted == false -> b 
const Thing = styled(Button)`


 text-align: left;
 margin-top:10px;
 &:hover {
  .check-icon {
    display:inline-block
   }
}
  .check-icon {
   display:none
  }
  &:hover {
    // background-color:gray;
    border-radius:4px;
  }
 
`
export default function Todo({todo, parentToChild}) {
  
  return (
   <div>
      <Thing 
      // isCompleted= {todo.isCompleted}
      className={todo.isCompleted ? 'isCompleted' : ''}
      shouldFitContainer 
      iconAfter={ !todo.isCompleted &&
      <span className='check-icon' onClick={()=>{parentToChild(todo.id)}}>
      <CheckIcon primaryColor='green'   />
    </span>}>{todo.name}</Thing>
   </div>


  )
}
