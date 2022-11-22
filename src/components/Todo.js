import React from 'react'
import Button from '@atlaskit/button';
import CheckIcon from '@atlaskit/icon/glyph/check'

import styled, {css} from 'styled-components';


const handleClick = () =>{
  console.log('ok');
}
const Thing = styled(Button)`

${p => p.isCompleted && css `
  text-decoration: line-through;
`}
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
    background-color:gray;
    border-radius:4px;
    
  }
 
`
export default function Todo({todo, parentToChild}) {
  
  return (
   <div>
      <Thing 
      isCompleted= {todo.isCompleted}
      shouldFitContainer 
      iconAfter={
      <span className='check-icon' onClick={()=>{handleClick()}}>
      <CheckIcon primaryColor='green'   />
    </span>}>{todo.name}</Thing>
   </div>


  )
}
