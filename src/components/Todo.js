import React from 'react'
import Button from '@atlaskit/button';


const divStyle = {
  'textAlign': 'left',
  'marginTop': '5px'
};

export default function Todo({item}) {
  return (
   <div>
    <Button shouldFitContainer style={divStyle}>{item.name}</Button>
   </div>
  )
}
