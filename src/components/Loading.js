import React from "react";
import Spinner from '@atlaskit/spinner';
import styled from "styled-components";

export const StyledButton = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
backgroundColor: rgba(255, 255, 255, 0.8);  
${(props) => {
  if (props.isLoading) {
    return `
      opacity:1;
      visibility:visible;
      `;
  } else {
    return `opacity: 0;
    visibility: hidden;
   
    `;
  }
}}

`;
export default function Loading({ isLoading = false }) {
  return (
    <StyledButton isLoading={isLoading} >
         <Spinner/>
    </StyledButton>
   
  );
}
